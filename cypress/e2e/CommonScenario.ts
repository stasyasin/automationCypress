import { TestParameter } from '../../fwk/utils/TestParameter';
import { ITestRunOptions } from '../../fwk/models/ITestRunOptions';
import { MainPO } from '../impl/po/MainPO';
import { LoginPO } from '../impl/po/LoginPO';
import '../support/loginPOCommands';

export abstract class CommonScenario {
  mainPO = new MainPO();
  loginPO = new LoginPO();

  abstract performTest(): void;

  pageSetup(testProps?: any): void {
    before((): void => {
      // Fill TestParameter object
      TestParameter.initCommonParameters(testProps);
      // Open Start page using URL from EnvironmentList
      cy.visit(TestParameter.environment.url);
      // Check that browser opened URL
      cy.title().should('exist');
    });
    after((): void => {
      cy.reload(); // Reload page after each e2e test
    });
  }

  performLogin(): void {
    this.mainPO.isLoginLinkDisplayed();
    this.mainPO.clickLoginLink();
    this.loginPO.isLoginButtonDisplayed();
    this.loginPO.performLogin(TestParameter.environment.userID, TestParameter.environment.password);
    this.mainPO.isCorrectLoggedUserNameDisplayed(TestParameter.environment.userID);
  }

  performLogOut(): void {
    this.mainPO.performLogout();
    this.mainPO.isLoginLinkDisplayed();
  }

  run(options: ITestRunOptions): void {
    describe('Describe name', (): void => {
      this.pageSetup(options.testProps);

      if (options.performLogin) {
        it('Perform Login actions', (): void => {
          this.performLogin();
        });
      }

      this.performTest();

      if (options.performLogin) {
        it('Perform Logout actions', (): void => {
          this.performLogOut();
        });
      }
    });
  }

}
