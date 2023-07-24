/**
 * TestRunOptions containing:
 * testName - name for describe()
 * performLogin - indicator to perform login/logout steps
 * testProps - optional properties to pass to test
 */
export interface ITestRunOptions {
  testName: string;
  testProps?: {};
  performLogin?: boolean;
}
