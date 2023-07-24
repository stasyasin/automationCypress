import { CommonScenario } from '../CommonScenario';
import { SAMPLE_FIRST_PROP } from '../../../resources/e2e/sampleTest/SampleFirstProp';
import { MainPO } from '../../impl/po/MainPO';
import { ArticlePO } from '../../impl/po/ArticlePO';
import { TestParameter } from '../../../fwk/utils/TestParameter';

export class SampleFirstCy extends CommonScenario {
  mainPO = new MainPO();
  articlePO = new ArticlePO();

  performTest(): void {
    it('Perform article search by searchTerm', (): void => {
      this.mainPO.performTermSearch(TestParameter.testProps.searchTerm);
      this.articlePO.getArticleHeader().should('eq', TestParameter.testProps.searchTerm + 1);
    });
  }
}

new SampleFirstCy().run(SAMPLE_FIRST_PROP);
