/**
 * TestRunOptions containing:
 * testName - name of the test ( use for describe step)
 * performLogin - indicator to perform login/logout steps
 * testProps - optional properties to pass to test
 */
export interface ITestRunOptions {
  testName?: string;
  testProps?: {};
  performLogin?: boolean;
}
