/// <reference types="cypress" />
// custom command for login PO

import { mainPOLocators } from '../impl/locators/MainPOLocators';
import { loginPOLocators } from '../impl/locators/LoginPOLocators';

declare global {
  namespace Cypress {
    // tslint:disable-next-line:interface-name
    interface Chainable {
      performLogin(userName: string, password: string): void;
    }
  }
}

Cypress.Commands.add('performLogin', (userName: string, password: string): void => {
  // Login steps here...
  cy.isElementDisplayed(mainPOLocators.LOC_LOGIN_LINK); // check if login link is displayed
  cy.clickElement(mainPOLocators.LOC_LOGIN_LINK); // click on login link
  cy.isElementDisplayed(loginPOLocators.LOC_LOGIN_BUTTON); // check if login page was opened by checking login button
  cy.fillElementInput(loginPOLocators.LOC_NAME_INPUT, userName); // fill userName input
  cy.fillElementInput(loginPOLocators.LOC_PASSWORD_INPUT, password); // fill password input
  cy.clickElement(loginPOLocators.LOC_LOGIN_BUTTON); // click on login button
  cy.isElementDisplayed(mainPOLocators.LOC_USER_NAME_LINK); // check that logged account username is displayed
  cy.getElementText(mainPOLocators.LOC_USER_NAME_LINK).should('eq', userName); // check that logged account username is correct
});
