import { TestParameter } from '../../fwk/utils/TestParameter';
import { ITestRunOptions } from '../../fwk/models/ITestRunOptions';
import { MainPO } from '../impl/po/MainPO';
import { LoginPO } from '../impl/po/LoginPO';

export abstract class CommonScenario {
  mainPO = new MainPO();
  loginPO = new LoginPO();

  abstract performTest(): void;

  pageSetup(testProps?: any): void {
    before((): void => {
      this.forceTestIsolationActions(); // cleanup state before all IT steps
      // Fill TestParameter object
      TestParameter.initCommonParameters(testProps);
      // Open Start page using URL from EnvironmentList
      cy.visit(TestParameter.environment.url);
      // Check that browser opened URL
      cy.title().should('exist');
    });
    after((): void => {
      this.forceTestIsolationActions(); // cleanup state after all IT steps
    });
  }

  // this is what "testIsolation: true" do. But we need to run in only before WHOLE E2E test, and after.
  // We want to isolate the ENTIRE E2E test ( DESCRIBE Step), and have all inside IT steps to be in scope of ENTIRE E2E test.
  // which mean no page reloads, no cookies, no localStorage, no sessionStorage, no cy.reload() in the beforeEach() hook for each IT step.
  private forceTestIsolationActions(): void {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    cy.reload();
  }

  performLogin(userId: string, password: string): void {
    this.mainPO.isLoginLinkDisplayed();
    this.mainPO.clickLoginLink();
    this.loginPO.isLoginButtonDisplayed();
    this.loginPO.performLogin(userId, password);
    this.mainPO.isCorrectLoggedUserNameDisplayed(userId);
  }

  performLogOut(): void {
    this.mainPO.performLogout();
    this.mainPO.isLoginLinkDisplayed();
  }

  run(options: ITestRunOptions): void {
    // testIsolation: false is needed to not reload page after each IT step and keep the tests with real E2E architecture,
    // where your test suite can have dozens IT steps
    describe(options?.testName, { testIsolation: false } as Cypress.SuiteConfigOverrides, (): void => {
      this.pageSetup(options.testProps);

      if (options?.performLogin) {
        it('Perform Login actions', (): void => {
          this.performLogin(TestParameter.environment.userID, TestParameter.environment.password);
        });
      }

      this.performTest();

      if (options?.performLogin) {
        it('Perform Logout actions', (): void => {
          this.performLogOut();
        });
      }
    });
  }

}
