/// <reference types="cypress" />
// ***********************************************
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

import Chainable = Cypress.Chainable;

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
      clickElement(selector: string): void;
      dbClickElement(selector: string): void;
      pressAndHoldElement(selector: string, duration: number): void;
      dragAndDropToCoordinates(selector: string, x: number, y: number): void;
      dragAndDropToElement(sourceSelector: string, targetSelector: string): void;
      swipeElement(selector: string, startY: number, endX: number, endY: number, duration: number): void;
      clickToCoordinates(x: number, y: number): void;
      fillElementInput(selector: string, text: string): void;
      selectElementValue(selector: string, value: string): void;
      uploadFile(selector: string, fileName: string): void;
      switchToWindow(windowName: string): void;
      pressKey(key: string): void;
      pressAndHoldKey(key: string, duration: number): void;
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
Cypress.Commands.add('waitForElementPresent', (selector: string): Chainable<JQuery<HTMLElement>> => {
  // Wait for the element with the given selector to be present
  return cy.get(selector, { timeout: globalWaitTimeout }).first().should('be.visible');
});

// Custom command to wait for an element to be not present (disappear)
Cypress.Commands.add('waitForElementNotPresent', (selector: string): Chainable<JQuery<HTMLElement>> => {
  // Wait for the element with the given selector to be not present (disappear)
  return cy.get(selector, { timeout: globalWaitTimeout }).first().should('not.exist');
});

// Custom command to wait for text to be present in an element
Cypress.Commands.add('waitForTextPresentInElement', (selector: string, text: string): Chainable<JQuery<HTMLElement>> => {
  return cy.get(selector, { timeout: globalWaitTimeout }).first().should('be.visible').should('contain', text);
});

// Custom command to wait for button to be clickable ( enabled)
Cypress.Commands.add('waitForButtonToBeClickable', (selector: string): Chainable<JQuery<HTMLElement>> => {
  return cy.get(selector, { timeout: globalWaitTimeout }).first().should('be.visible').should('not.have.attr', 'disabled');
});

// Custom command to wait for spinner to appear and then disappear
Cypress.Commands.add('waitForSpinnerToFinish', (selector: string): void => {
  cy.waitForElementPresent(selector);
  cy.waitForElementNotPresent(selector);
});

// Custom command to check that element is displayed(visible)
Cypress.Commands.add('isElementDisplayed', (selector: string): Chainable<JQuery<HTMLElement>> => {
  return cy.get(selector, { timeout: globalWaitTimeout }).first().should('be.visible');
});

// Custom command to check that element is displayed and enabled
Cypress.Commands.add('isElementDisplayedAndEnabled', (selector: string): Chainable<JQuery<HTMLElement>> => {
  return cy.get(selector, { timeout: globalWaitTimeout }).first().should('be.visible').should('not.be.disabled');
});

// Custom command to get text of the element
Cypress.Commands.add('getElementText', (selector: string): Chainable<string> => {
  return cy.get(selector, { timeout: globalWaitTimeout }).first().invoke('text');
});

// Custom command to scroll into view of the element
Cypress.Commands.add('scrollToElement', (selector: string): Chainable<JQuery<HTMLElement>> => {
  return cy.get(selector, { timeout: globalWaitTimeout }).first().scrollIntoView();
});

// Custom command to get valud of the element
Cypress.Commands.add('getElementValue', (selector: string): Chainable<string> => {
  return cy.get(selector, { timeout: globalWaitTimeout }).first().invoke('val');
});

// Custom command to get checkbox status ( checked/unchecked )
Cypress.Commands.add('getCheckboxState', (selector: string): Chainable<boolean> => {
  return cy.get(selector, { timeout: globalWaitTimeout }).first().invoke('prop', 'checked');
});

// Custom command to get attribute of the element
Cypress.Commands.add('getElementAttribute', (selector: string, attributeName: string): Chainable<string> => {
  return cy.get(selector, { timeout: globalWaitTimeout }).first().invoke('attr', attributeName);
});

// Custom command to get css value of the element
Cypress.Commands.add('getElementCSSValue', (selector: string, propertyName: string): Chainable<string> => {
  return cy.get(selector, { timeout: globalWaitTimeout }).first().invoke('css', propertyName);
});

// Custom command to get location of the element
Cypress.Commands.add('getElementLocation', (selector: string): Chainable<any> => {
  return cy.get(selector, { timeout: globalWaitTimeout }).first().invoke('offset').then(($offset): {} => {
    return {
      top: $offset.top,
      left: $offset.left
    };
  });
});

// Custom command to count elements with the given selector
Cypress.Commands.add('countElements', (selector: string): Chainable<number> => {
  return cy.get(selector,  { timeout: globalWaitTimeout }).its('length');
});

// Custom command to click on the element
Cypress.Commands.add('clickElement', (selector: string): void => {
  cy.get(selector, { timeout: globalWaitTimeout }).first().click();
});

// Custom command to double click on the element
Cypress.Commands.add('dbClickElement', (selector: string): void => {
  cy.get(selector, { timeout: globalWaitTimeout }).first().dblclick();
});

// Custom command to press and hold the element for the specified duration
Cypress.Commands.add('pressAndHoldElement', (selector: string, duration: number = 1000): void => {
  cy.get(selector, { timeout: globalWaitTimeout }).first().trigger('mousedown'); // Trigger mousedown event to press the element
  cy.wait(duration); // Wait for the specified duration to simulate the hold
  cy.get(selector, { timeout: globalWaitTimeout }).first().trigger('mouseup'); // Trigger mouseup event to release the element
});

// Custom command to drag and drop the element to the specified coordinates
Cypress.Commands.add('dragAndDropToCoordinates', (selector: string, x: number, y: number): void => {
  cy.get(selector, { timeout: globalWaitTimeout }).first().trigger('mousedown', { button: 0 }); // Trigger mousedown event to start the drag
  cy.wait(200); // Wait for a short delay (you can adjust this if needed)
  cy.get('body').trigger('mousemove', { clientX: x, clientY: y }); // Trigger mousemove event to simulate dragging to coordinates
  cy.get('body').trigger('mouseup', { force: true }); // Trigger mouseup event to complete the drag and drop
});

// Custom command to drag and drop the element to the specified element
Cypress.Commands.add('dragAndDropToElement', (sourceSelector: string, targetSelector: string): void => {
  cy.get(sourceSelector, { timeout: globalWaitTimeout }).first().trigger('dragstart', { force: true });
  cy.get(targetSelector, { timeout: globalWaitTimeout }).first().trigger('drop', { force: true });
  cy.get(targetSelector, { timeout: globalWaitTimeout }).first().trigger('dragend', { force: true });
});

// Custom command to swipe the element to the specified coordinates
Cypress.Commands.add('swipeElement',
  (selector: string, startX: number, startY: number, endX: number, endY: number, duration: number = 200): void => {
  cy.get(selector, { timeout: globalWaitTimeout }).first().trigger('touchstart', { clientX: startX, clientY: startY });
  cy.wait(duration);
  cy.get(selector, { timeout: globalWaitTimeout }).first().trigger('touchmove', { clientX: endX, clientY: endY });
  cy.wait(duration);
  cy.get(selector, { timeout: globalWaitTimeout }).first().trigger('touchend', { force: true });
});

// Custom command to click on the coordinates of the element
Cypress.Commands.add('clickToCoordinates', (x: number, y: number): void => {
  cy.document().trigger('click', x, y);
});

// Custom command to fill element input
Cypress.Commands.add('fillElementInput', (selector: string, text: string): void => {
  cy.get(selector, { timeout: globalWaitTimeout }).first().type(text);
});

// Custom command to select element value ( from dropdown)
Cypress.Commands.add('selectElementValue', (selector: string, value: string): void => {
  cy.get(selector, { timeout: globalWaitTimeout }).first().select(value);
});

// Custom command to upload file
Cypress.Commands.add('uploadFile', (selector: string, fileName: string): void => {
  const fileContent = cy.fixture(fileName);
  const blob = Cypress.Blob.base64StringToBlob(fileContent as string);
  const testFile = new File([blob], fileName);
  const dataTransfer = new DataTransfer();

  dataTransfer.items.add(testFile);

  const el = cy.get(selector, { timeout: globalWaitTimeout });
  el[0].files = dataTransfer.files;
  cy.wrap(el).trigger('change', { force: true });
});

// Custom command to switch to different window
Cypress.Commands.add('switchToWindow', (windowName: string): void => {
  const win = cy.window();
  cy.wrap(win).invoke('open', '', windowName);
});

// Custom command to press key button
Cypress.Commands.add('pressKey', (key): void => {
  cy.get('body').type(`{${key}}`);
});

// Custom command to press and hold key button for the specified duration
Cypress.Commands.add('pressAndHoldKey', (key, duration): void => {
  cy.get('body')
    .trigger('keydown', { keyCode: key, which: key })
    .wait(duration)
    .trigger('keyup', { keyCode: key, which: key });
});
