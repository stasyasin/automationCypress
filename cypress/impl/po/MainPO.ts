import { mainPOLocators } from '../locators/MainPOLocators';

export class MainPO {

  isLoginLinkDisplayed(): void {
    cy.isElementDisplayed(mainPOLocators.LOC_LOGIN_LINK);
  }

  clickLoginLink(): void {
    cy.clickElement(mainPOLocators.LOC_LOGIN_LINK);
  }

  isCorrectLoggedUserNameDisplayed(userName: string): void {
    cy.isElementDisplayed(mainPOLocators.LOC_USER_NAME_LINK);
    cy.getElementText(mainPOLocators.LOC_USER_NAME_LINK).should('eq', userName);
  }

  performLogout(): void {
    cy.clickElement(mainPOLocators.LOC_ACCOUNT_MENU);
    cy.clickElement(mainPOLocators.LOC_LOGOUT_LINK);
  }

  performTermSearch(searchTerm: string): void {
    cy.isElementDisplayed(mainPOLocators.LOC_SEARCH_INPUT);
    cy.fillElementInput(mainPOLocators.LOC_SEARCH_INPUT, searchTerm);
    cy.clickElement(mainPOLocators.LOC_SEARCH_BUTTON);
  }
}
