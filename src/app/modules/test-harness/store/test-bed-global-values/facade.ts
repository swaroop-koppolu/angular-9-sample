import { StoreFacade, createDuck, bindSelectors, getActions, getReducer, dispatch } from "@ngrx-ducks/core";
import * as Selectors from "./selectors";
import { IJointTypeTestCaseGlobalSettings } from "./state";

@StoreFacade()
export class TestBedGlobalFacade {
  constructor() { }
  select = bindSelectors(Selectors);

  setName = createDuck("Set Name", (state: IJointTypeTestCaseGlobalSettings, name: string) => {
    return {
      ...state,
      Name: name
    };
  });
  setCameraIds = createDuck("Set CameraIds", (state: IJointTypeTestCaseGlobalSettings, cameraIds: []) => {
    return {
      ...state,
      CameraIds: cameraIds
    };
  });
  setSampleImagePath = createDuck("Set sampleImagePath", (state: IJointTypeTestCaseGlobalSettings, sampleImagePath: string) => {
    return {
      ...state,
      SampleImagePath: sampleImagePath
    };
  });
  setCameras = createDuck("Set Cameras", (state: IJointTypeTestCaseGlobalSettings, payload: []) => {
    return {
      ...state,
    Cameras: [...payload],
      Waiting:false
    };
  });
  waiting = createDuck("Set waiting", (state: IJointTypeTestCaseGlobalSettings, waiting: boolean) => {
    return {
      ...state,
      Waiting: waiting
    };
  });
  hasErrorLoading = createDuck("Set hasErrorLoading", (state: IJointTypeTestCaseGlobalSettings, hasErrorLoading: boolean) => {
    return {
      ...state,
      HasErrorLoading: hasErrorLoading,
      Waiting:false
    };
  });
  //beginLoadCameras = createDuck("Begin Uploading Files", dispatch<void>());

  loadCameras = createDuck("Upload File", dispatch<void>());

  updateName = createDuck("update Name", dispatch<String>());



  resetState = createDuck("Set ResetState", (state: IJointTypeTestCaseGlobalSettings) => {
    return {
      ...initialState,
    };
  });
}

const initialState: IJointTypeTestCaseGlobalSettings = {
  Name: "",
  CameraIds: [],
  SampleImagePath: "",
  Cameras: [],
  Waiting:false,
  HasErrorLoading:false,
};

export const testBedGlobalComponentReducer = getReducer(initialState, TestBedGlobalFacade);
export const testBedGlobalActions = getActions(TestBedGlobalFacade);