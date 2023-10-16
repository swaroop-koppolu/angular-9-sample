//import { IRailPosition, ITrackClass, ITrackType, IDamageCode, IDamageGroupCode, IRemedialAction, IDefectPriorityNew, IObservationDetails, IDefectDetails, IAssetDetails, IManualDefect, ISubmitDefectResponse } from "@inventory/models";
//import { IUser } from "@shared/interfaces/user.interface";

export interface IJointTypeTestCaseGlobalSettings {
  Name: string;
  CameraIds: number[];
  SampleImagePath: string;
  Cameras: number[];
  Waiting:boolean;
  HasErrorLoading:boolean;
}