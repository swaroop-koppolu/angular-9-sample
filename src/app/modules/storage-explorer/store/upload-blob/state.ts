//import { IRailPosition, ITrackClass, ITrackType, IDamageCode, IDamageGroupCode, IRemedialAction, IDefectPriorityNew, IObservationDetails, IDefectDetails, IAssetDetails, IManualDefect, ISubmitDefectResponse } from "@inventory/models";
//import { IUser } from "@shared/interfaces/user.interface";

export interface IUploadBlobComponentState {
  isUploadingFiles?: boolean;
  filesToUpload?: File[];
  filesUploadedSuccessfully?: File[];
  filesFailedToUpload?: File[];
  isLoading?: boolean;
  error?: any;
}