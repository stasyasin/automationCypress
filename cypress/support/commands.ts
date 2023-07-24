/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

import Chainable = Cypress.Chainable;
import * as Bluebird from 'cypress/types/net-stubbing';
// import { Subject } from 'rxjs';
// import * as Chainable from ''

declare global {
  namespace Cypress {
    // tslint:disable-next-line:interface-name
    interface Chainable {
      waitInSeconds(seconds: number): Chainable;
      waitForElementPresent(selector: string): Chainable;
      waitForElementNotPresent(selector: string): Chainable;
      waitForTextPresentInElement(selector: string, text: string): Chainable;
      waitForButtonToBeClickable(selector: string): Chainable;
      waitForSpinnerToFinish(selector: string): Chainable;
      isElementDisplayed(selector: string): Chainable;
      isElementDisplayedAndEnabled(selector: string): Chainable;
      getElementText(selector: string): Chainable;
      scrollToElement(selector: string): Chainable;
      getElementValue(selector: string): Chainable;
      getCheckboxState(selector: string): Chainable;
      getElementAttribute(selector: string, attributeName: string): Chainable;
      getElementCSSValue(selector: string, propertyName: string): Chainable;
      getElementLocation(selector: string): Chainable;
      countElements(selector: string): Chainable;
    }
  }
}

const globalWaitTimeout: number = 30 * 1000;

// Custom command to wait for a number of seconds
Cypress.Commands.add('waitInSeconds', (seconds: number): Chainable<void> => {
  // Wait for the specified number of seconds
  return cy.wait(seconds * 1000);
});

// Custom command to wait for an element to be present
Cypress.Commands.add('waitForElementPresent', (selector: string): Chainable<JQuery<any>> => {
  // Wait for the element with the given selector to be present
  return cy.get(selector, { timeout: globalWaitTimeout }).should('be.visible');
});

// Custom command to wait for an element to be not present (disappear)
Cypress.Commands.add('waitForElementNotPresent', (selector: string): Chainable<JQuery<any>> => {
  // Wait for the element with the given selector to be not present (disappear)
  return cy.get(selector, { timeout: globalWaitTimeout }).should('not.exist');
});

// Custom command to wait for text to be present in an element
Cypress.Commands.add('waitForTextPresentInElement', (selector: string, text: string): Chainable<JQuery<any>> => {
  return cy.get(selector, { timeout: globalWaitTimeout }).should('be.visible').should('contain', text);
});

// Custom command to wait for button to be clickable ( enabled)
Cypress.Commands.add('waitForButtonToBeClickable', (selector): Chainable<JQuery<any>> => {
  return cy.get(selector, { timeout: globalWaitTimeout }).should('be.visible').should('not.have.attr', 'disabled');
});

// Custom command to wait for spinner to appear and then disappear
Cypress.Commands.add('waitForSpinnerToFinish', async (selector: string): Promise<void> => {
  await cy.waitForElementPresent(selector);
  await cy.waitForElementNotPresent(selector);
});

// Custom command to check that element is displayed(visible)
Cypress.Commands.add('isElementDisplayed', (selector: string): Chainable<JQuery<any>> => {
  return cy.get(selector, { timeout: globalWaitTimeout }).should('be.visible');
});

// Custom command to check that element is displayed and enabled
Cypress.Commands.add('isElementDisplayedAndEnabled', (selector): Chainable<JQuery<any>> => {
  return cy.get(selector, { timeout: globalWaitTimeout }).should('be.visible').should('not.be.disabled');
});

Cypress.Commands.add('getElementText', (selector): Chainable<string> => {
  return cy.get(selector, { timeout: globalWaitTimeout }).invoke('text');
});

Cypress.Commands.add('scrollToElement', (selector): Chainable<JQuery<any>> => {
  return cy.get(selector, { timeout: globalWaitTimeout }).scrollIntoView();
});

Cypress.Commands.add('getElementValue', (selector): Chainable<string> => {
  return cy.get(selector, { timeout: globalWaitTimeout }).invoke('val');
});

Cypress.Commands.add('getCheckboxState', (selector): Chainable<boolean> => {
  return cy.get(selector, { timeout: globalWaitTimeout }).invoke('prop', 'checked');
});

Cypress.Commands.add('getElementAttribute', (selector, attributeName): Chainable<string> => {
  return cy.get(selector, { timeout: globalWaitTimeout }).invoke('attr', attributeName);
});

Cypress.Commands.add('getElementCSSValue', (selector, propertyName): Chainable<string> => {
  return cy.get(selector, { timeout: globalWaitTimeout }).invoke('css', propertyName);
});

Cypress.Commands.add('getElementLocation', (selector): Chainable<any> => {
  return cy.get(selector, { timeout: globalWaitTimeout }).invoke('offset').then(($offset): {} => {
    return {
      top: $offset.top,
      left: $offset.left
    };
  });
});

Cypress.Commands.add('countElements', (selector, options): Chainable<number> => {
  return cy.get(selector, options).its('length');
});






















// old draft
// // Custom command to wait for a number of seconds
// Cypress.Commands.add('waitInSeconds', (seconds: number): Chainable<void> => {
//   // Wait for the specified number of seconds
//   return cy.wait(seconds * 1000);
// });
//
// // Custom command to wait for an element to be present
// Cypress.Commands.add('waitForElementPresent', (selector: string): Chainable<JQuery<HTMLButtonElement>> => {
//   // Wait for the element with the given selector to be present
//   return cy.get(selector, { timeout: globalWaitTimeout }).should('be.visible');
// });
//
// // Custom command to wait for an element to be not present (disappear)
// Cypress.Commands.add('waitForElementNotPresent', (selector: string): Chainable<JQuery<HTMLButtonElement>> => {
//   // Wait for the element with the given selector to be not present (disappear)
//   return cy.get(selector, { timeout: globalWaitTimeout }).should('not.exist');
// });
//
// Cypress.Commands.add('waitForTextPresentInElement', (selector: string, text: string): Chainable<JQuery<HTMLButtonElement>> => {
//   return cy.get(selector, { timeout: globalWaitTimeout }).should(($element: JQuery<any>): void => {
//     $element.should('be.visible');
//     $element.should('contain', text);
//   });
// });
//
// Cypress.Commands.add('waitForButtonToBeClickable', (selector): Chainable<JQuery<HTMLButtonElement>> => {
//   return cy.get(selector, { timeout: globalWaitTimeout }).should(($button: JQuery<any>): void => {
//     $button.should('be.visible');
//     $button.should('not.have.attr', 'disabled');
//   });
// });
//
// Cypress.Commands.add('waitForSpinnerToFinish', async (selector: string): Promise<void> => {
//   await cy.waitForElementPresent(selector);
//   await cy.waitForElementNotPresent(selector);
// });
//
//
// // check text
// Cypress.Commands.add('isElementDisplayed', (selector: string): Chainable<JQuery<HTMLButtonElement>> => {
//   return cy.get(selector).should('be.visible');
// });
//
// Cypress.Commands.add('isElementDisplayedAndEnabled', (selector): Chainable<JQuery<HTMLButtonElement>> => {
//   return cy.get(selector).should('be.visible').should('not.be.disabled');
// });
