import { TestParameter } from '../../fwk/utils/TestParameter';
import { MainPO } from '../impl/po/MainPO';
import { LoginPO } from '../impl/po/LoginPO';

export class CommonSteps {
  mainPO = new MainPO();
  loginPO = new LoginPO();

  pageSetup(testProps?: any): void {
    // Fill TestParameter object
    TestParameter.initCommonParameters(testProps);
    // Open Start page using URL from EnvironmentList
    cy.visit(TestParameter.environment.url);
    // Check that browser opened URL
    cy.title().should('exist');
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

}
