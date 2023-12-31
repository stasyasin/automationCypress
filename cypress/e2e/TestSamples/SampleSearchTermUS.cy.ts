import { CommonScenario } from '../CommonScenario';
import { MainPO } from '../../impl/po/MainPO';
import { ArticlePO } from '../../impl/po/ArticlePO';
import { TestParameter } from '../../../fwk/utils/TestParameter';
import { SAMPLE_SEARCH_TERM_US } from '../../../resources/e2e/TestSamples/SampleSearchTermUS';

export class SampleSearchTermUkraine extends CommonScenario {
  mainPO = new MainPO();
  articlePO = new ArticlePO();

  performTest(): void {
    it('Perform article search by searchTerm', (): void => {
      this.mainPO.performTermSearch(TestParameter.testProps.searchTerm);
      this.articlePO.getArticleHeader().should('eq', TestParameter.testProps.searchTerm);
    });
  }
}

new SampleSearchTermUkraine().run(SAMPLE_SEARCH_TERM_US);
