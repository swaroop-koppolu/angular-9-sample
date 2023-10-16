import { EnvironmentPlatform, Environment } from "@shared/enums/environment-type.enum";

export interface IAppConfig {
  env: Environment;
  envPlatform: EnvironmentPlatform;
  adalConfig: IAdalConfig;
  appInsights: IAppInsights;
  thorPortalApi: IThorPortalAPI;
  inventoryApi: IInventoryAPI;
  systemMonitorApi: ISystemMonitorAPI;
  testHarnessApi: ITestHarnessAPI;
  imageMetadataSearchApi: IImageMetadataSearchAPI;
  imageSearchApi: IImageSearchAPI;
  manualDefectApi: IManualDefectAPI;
  imageTrainingApi: IImageTrainingAPI;
}

export interface IAdalConfig {
  tenant: string;
  clientId: string;

  navigateToLoginRequestUrl: boolean;
  cacheLocation: string;
}

export interface IAppInsights {
  instrumentationKey: string;
  enableAutoRouteTracking: boolean;
}

export interface IInventoryAPI {
  baseUrl: string;
  endPoints: IInventoryAPIEndpoints;
}

export interface IInventoryAPIEndpoints {
  getAssetsAsync: string;
  getAssetTypesAsync: string;
  getAssetSubTypesAsync: string;
  getFalsePositiveCategoriesAsync: string;
  getDefectCodesAsync: string;
  getDefectPrioritiesAsync: string;
  getDefectsAsync: string;
  saveAssetAsync: string;
  submitAssetAsync: string;
  toggleLockAsync: string;
  getRemedialActions: string;
}

export interface IManualDefectAPI {
  baseUrl: string;
  endPoints: IManualDefectAPIEndpoints;
}

export interface IManualDefectAPIEndpoints {
  submitDefect: string;
  getAllDefects: string;
  getDefectById: string;
  getDefectByAssetId: string;
}

export interface IImageTrainingAPI {
  baseUrl: string;
  endPoints: IImageTrainingAPIEndpoints;
}

export interface IImageTrainingAPIEndpoints {
  uploadToImageTraining: string;
}

export interface ISystemMonitorAPI {
  baseUrl: string;
  endPoints: ISystemMonitorAPIEndPoints;
}

export interface ISystemMonitorAPIEndPoints {
  computeNodeStatus: string;
  getLastLocation: string;
}

export interface ITestHarnessAPI {
  baseUrl: string;
  endPoints: TestHarnessAPIEndPoints;
}

export interface TestHarnessAPIEndPoints {
  getTestCasesForJoints: string;
  submitTestCasesForJoints: string;
}

export interface IThorPortalAPI {
  baseUrl: string;
  endPoints: IThorPortalAPIEndpoints;
}

export interface IThorPortalAPIEndpoints {
  cleanUp: string;
  getComputeNodeDetails: string;
  computeNode: string;
  initiateRun: string;
  terminateRun: string;
  latestLogs: string;
  getFileConent: string;
  getFileList: string;
  getCurrentRun: string;
  getComputeNodeStatus: string;
  saveConfigFiles: string;
  getRunHistory: string;
  saveRunHistory: string;
  getRaspberryPiStatus: string;
  restartRaspberryPi: string;
}

export interface IImageMetadataSearchAPI {
  baseUrl: string;
  headerApiKey: string;
  headerApiValue: string;
  endPoints: IImageMetadataSearchAPIEndpoints;
}

export interface IImageMetadataSearchAPIEndpoints {
  getMetadataApiHeaderKey: string;
  getMetadataApiHeaderValue: string;
  getMetadata: string;
}

export interface IImageSearchAPI {
  baseUrl: string;
  endPoints: IImageSearchAPIEndpoints;
}

export interface IImageSearchAPIEndpoints {
  getImages: string;
}





