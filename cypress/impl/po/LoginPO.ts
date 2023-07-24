import { loginPOLocators } from '../locators/LoginPOLocators';

export class LoginPO {
  isLoginButtonDisplayed(): void {
    cy.isElementDisplayed(loginPOLocators.LOC_LOGIN_BUTTON);
  }

  performLogin(username: string, password: string): void {
    cy.fillElementInput(loginPOLocators.LOC_NAME_INPUT, username);
    cy.fillElementInput(loginPOLocators.LOC_PASSWORD_INPUT, password);
    cy.clickElement(loginPOLocators.LOC_LOGIN_BUTTON);
  }
}
