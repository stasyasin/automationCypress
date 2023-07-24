import { articlePOLocators } from '../locators/ArticlePOLocators';

export class ArticlePO {

  getArticleHeader(): Chainable<string> {
    return cy.getElementText(articlePOLocators.LOC_ARTICLE_HEADER);
  }
}
