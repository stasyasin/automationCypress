import { CommonSteps } from '../CommonSteps';
import { ITestRunOptions } from '../../../fwk/models/ITestRunOptions';
import { TestParameter } from '../../../fwk/utils/TestParameter';
import { MainPO } from '../../impl/po/MainPO';
import { ArticlePO } from '../../impl/po/ArticlePO';
import { SAMPLE_SEARCH_TERM_UKRAINE } from '../../../resources/e2e/TestSamples/SampleSearchTermUkraine';

describe('Perform article search by searchTerm Ukraine', (): void => {
  const testConfig = SAMPLE_SEARCH_TERM_UKRAINE as ITestRunOptions; // Get test config
  const commonSteps = new CommonSteps();
  // Page objects
  const mainPO = new MainPO();
  const articlePO = new ArticlePO();
  it('Login, search by searchTerm and logout', (): void => {
    commonSteps.pageSetup(testConfig.testProps);
    commonSteps.performLogin(TestParameter.environment.userID, TestParameter.environment.password);
    mainPO.performTermSearch(TestParameter.testProps.searchTerm);
    articlePO.getArticleHeader().should('eq', TestParameter.testProps.searchTerm);
    commonSteps.performLogOut();
  });
});
