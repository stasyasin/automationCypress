// import { CommonSteps } from '../CommonSteps';
// import { SAMPLE_FIRST_PROP } from '../../../resources/e2e/TestSamples/SampleFirstProp';
// import { ITestRunOptions } from '../../../fwk/models/ITestRunOptions';
// import { TestParameter } from '../../../fwk/utils/TestParameter';
// import { MainPO } from '../../impl/po/MainPO';
// import { ArticlePO } from '../../impl/po/ArticlePO';
//
// describe(SAMPLE_FIRST_PROP.testName, (): void => {
//   const testConfig = SAMPLE_FIRST_PROP as ITestRunOptions; // Get test config
//   const commonSteps = new CommonSteps();
//   // Page objects
//   const mainPO = new MainPO();
//   const articlePO = new ArticlePO();
//   it('Perform article search by searchTerm', (): void => {
//     commonSteps.pageSetup(testConfig.testProps);
//     commonSteps.performLogin();
//     mainPO.performTermSearch(TestParameter.testProps.searchTerm);
//     articlePO.getArticleHeader().should('eq', TestParameter.testProps.searchTerm);
//     commonSteps.performLogOut();
//   });
// });
