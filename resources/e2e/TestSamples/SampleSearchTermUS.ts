import { ITestRunOptions } from '../../../fwk/models/ITestRunOptions';

export const SAMPLE_SEARCH_TERM_US: ITestRunOptions = {
  testName: 'Perform article search by searchTerm "United States"',
  performLogin: true,
  testProps: {
    searchTerm: 'United States'
  }
};
