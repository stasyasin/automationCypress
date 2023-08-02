import { CommonScenario } from '../CommonScenario';
import { MainPO } from '../../impl/po/MainPO';
import { ArticlePO } from '../../impl/po/ArticlePO';
import { TestParameter } from '../../../fwk/utils/TestParameter';
import { SAMPLE_SEARCH_TERM_UKRAINE } from '../../../resources/e2e/TestSamples/SampleSearchTermUkraine';

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

new SampleSearchTermUkraine().run(SAMPLE_SEARCH_TERM_UKRAINE);


// import { CommonSteps } from '../CommonSteps';
// import { ITestRunOptions } from '../../../fwk/models/ITestRunOptions';
// import { TestParameter } from '../../../fwk/utils/TestParameter';
// import { MainPO } from '../../impl/po/MainPO';
// import { ArticlePO } from '../../impl/po/ArticlePO';
// import { SAMPLE_SEARCH_TERM_UKRAINE } from '../../../resources/e2e/TestSamples/SampleSearchTermUkraine';
//
// describe('Perform article search by searchTerm Ukraine', (): void => {
//   const testConfig = SAMPLE_SEARCH_TERM_UKRAINE as ITestRunOptions; // Get test config
//   const commonSteps = new CommonSteps();
//   // Page objects
//   const mainPO = new MainPO();
//   const articlePO = new ArticlePO();
//   it('Login, search by searchTerm and logout', (): void => {
//     commonSteps.pageSetup(testConfig.testProps);
//     commonSteps.performLogin(TestParameter.environment.userID, TestParameter.environment.password);
//     mainPO.performTermSearch(TestParameter.testProps.searchTerm);
//     articlePO.getArticleHeader().should('eq', TestParameter.testProps.searchTerm);
//     commonSteps.performLogOut();
//   });
// });
