//import { IRailPosition, ITrackClass, ITrackType, IDamageCode, IDamageGroupCode, IRemedialAction, IDefectPriorityNew, IObservationDetails, IDefectDetails, IAssetDetails, IManualDefect, ISubmitDefectResponse } from "@inventory/models";
//import { IUser } from "@shared/interfaces/user.interface";
import { IJointBarTypeTestCase } from "../../models/models";
export interface ITestHarnessBarTypeSelection {
  CWR:boolean,
  ClassType:number,
  Longitude:number,
  Latitude:number,
  isUpdated:boolean,
  Waiting:boolean;
  HasErrorLoading:boolean;
  testCases:IJointBarTypeTestCase[] ;
  classTypes:number[]
}