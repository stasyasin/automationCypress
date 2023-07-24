// import { browser } from 'protractor';
// import { TestRunOptions } from '../fwk/models/TestRunOptions';
// import { LoginPO } from '../impl/po/LoginPO';
// import { MainPO } from '../impl/po/MainPO';
// import { RepositoryPO } from '../impl/po/RepositoryPO';
// import { TestParameter } from '../fwk/testUtils/TestParameter';
// import * as WaitUtils from '../../fwk/utils/WaitUtils';

import { TestParameter } from '../../fwk/utils/TestParameter';
import { ITestRunOptions } from '../../fwk/models/ITestRunOptions';
import { MainPO } from '../impl/po/MainPO';

export abstract class CommonScenario {
  // loginPO = new LoginPO();
  mainPO = new MainPO();
  // repositoryPO = new RepositoryPO();

  abstract performTest(): void;

  async pageSetup(testProps?: any): Promise<void> {
    before(async (): Promise<void> => {
      // Fill TestParameter object
      TestParameter.initCommonParameters(testProps);
      // Open Start page using URL from EnvironmentList
      await cy.visit(TestParameter.environment.url);
      // Check that browser opened URL
      await cy.title().should('exist');
    });
    after(async (): Promise<void> => {
      await cy.reload(); // Reload page after each e2e test
    });
  }

  async performLogin(): Promise<void> {
    await this.mainPO.isLoginLinkDisplayed();
    await this.mainPO.clickLoginLink();
    // possible TestParameter.data... if want to take credentials from TestProperty
    // await this.loginPO.performLogin(TestParameter.environment.userID, TestParameter.environment.password);
    // expect(await this.mainPO.isStartProjectLinkDisplayed()).toBeTruthy(
    //   'Start Project link is not displayed, login was not successful');
  }

  async performLogOut(): Promise<void> {
    // await this.mainPO.clickLogout();
    // expect(await this.loginPO.isHeaderMenuLinkDisplayed()).toBeTruthy(
    //   'Sign In Link is not displayed, Login page was not loaded');
  }

  run(options: ITestRunOptions): void {
    describe(options.testName, async (): Promise<void> => {
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

      // await cy.reload(); // Reload page after each e2e test
    });
  }

}
