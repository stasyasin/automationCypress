import { ITestRunOptions } from '../../../fwk/models/ITestRunOptions';

export const SAMPLE_SEARCH_TERM_UKRAINE: ITestRunOptions = {
  testName: 'Perform article search by searchTerm "Ukraine"',
  performLogin: true,
  testProps: {
    searchTerm: 'Ukraine'
  }
};
