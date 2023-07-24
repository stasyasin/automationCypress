import { CommonScenario } from '../CommonScenario';
import { SAMPLE_FIRST_PROP } from '../../../resources/e2e/sampleTest/SampleFirstProp';

export class SampleFirstCy extends CommonScenario {

  performTest(): void {
    it('Search repository with name/owner from TestParameters', (): void => {
      // await this.mainPO.searchRepository(TestParameter.data.repositoryParameters.repName,
      //   TestParameter.data.repositoryParameters.repOwner);
      // expect(await this.repositoryPO.isSummaryButtonDisplayed()).toBeTruthy(
      //   'Summary Button is not displayed, repository was not found');
    });
  }
}

new SampleFirstCy().run(SAMPLE_FIRST_PROP);
