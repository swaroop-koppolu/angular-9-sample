import { StoreFacade, createDuck, bindSelectors, getActions, getReducer, dispatch } from "@ngrx-ducks/core";
import * as Selectors from "./selectors";
import { IUploadBlobComponentState } from "./state";

@StoreFacade()
export class UploadBlobFacade {
  constructor() { }
  select = bindSelectors(Selectors);

  setFilesToUpload = createDuck("Set Files to Upload", (state: IUploadBlobComponentState, filesToUpload: File[]) => {
    return {
      ...state,
      filesUploadedSuccessfully: [],
      filesFailedToUpload: [],
      filesToUpload: [...filesToUpload]
    };
  });

  beginUpload = createDuck("Begin Uploading Files", dispatch<File[]>());

  uploadFile = createDuck("Upload File", dispatch<File>());

  setFileUploadedSuccessfully = createDuck("File Uploaded Successfully", (state: IUploadBlobComponentState, file: File) => {
    return {
      ...state,
      filesToUpload: state.filesToUpload.filter((f: File) => f.name !== file.name),
      filesUploadedSuccessfully: [...state.filesUploadedSuccessfully, file]
    };
  });

  setFilesUploadedFailed = createDuck("File Upload Failed", (state: IUploadBlobComponentState, file: File) => {
    return {
      ...state,
      filesToUpload: state.filesToUpload.filter((f: File) => f.name !== file.name),
      filesFailedToUpload: [...state.filesFailedToUpload, file]
    };
  });

  resetState = createDuck("Set Files to Upload", (state: IUploadBlobComponentState) => {
    return {
      ...initialState,
    };
  });
}

const initialState: IUploadBlobComponentState = {
  filesFailedToUpload: [],
  filesToUpload: [],
  filesUploadedSuccessfully: [],
  isUploadingFiles: false,
  isLoading: true,
  error: null
};

export const uploadBlobComponentReducer = getReducer(initialState, UploadBlobFacade);
export const uploadBlobActions = getActions(UploadBlobFacade);