import { IEnvironment } from '../models/IEnvironment';
import { ENVIRONMENT_LIST } from '../../resources/common/environmentList';

/**
 * TestParameter class to init all necessary parameters
 * + make all initActions like init all objects before tests
 * + to get any parameter through getParam method
 */
export class TestParameter {
  public static testProps: any = null;
  private static timeStamp: Date = null;
  public static environment: IEnvironment = {} as IEnvironment;

  /**
   * Common method to include all necessary init methods before test.
   */
  public static initCommonParameters(testProps?: any): void {
    if (!!testProps) {
      this.testProps = testProps;
    }
    this.timeStamp = new Date();
    this.initEnvironment();
  }

  /**
   * Method to Initialize environment values from /resources/common/environmentList
   */
  protected static initEnvironment(): void {
    const envConfFile = ENVIRONMENT_LIST;
    this.environment.envName = envConfFile.envName; // todo set this through command line arguments
    this.environment.url = envConfFile[this.environment.envName].url;
    this.environment.userID = envConfFile[this.environment.envName].userID;
    this.environment.password = envConfFile[this.environment.envName].password;
  }

}
