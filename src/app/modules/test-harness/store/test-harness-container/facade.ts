import { StoreFacade, createDuck, bindSelectors, getActions, getReducer, dispatch } from "@ngrx-ducks/core";
import * as Selectors from "./selectors";
import { ITestHarnessContainer } from "./state";
import { ISaveRequest } from "../../models/models";
@StoreFacade()
export class TestHarnessContainerFacade {
  constructor() { }
  select = bindSelectors(Selectors);

  isUpdated = createDuck("Set Files to Upload", (state: ITestHarnessContainer, isUpdated: boolean) => {
    return {
      ...state,
      isUpdated: isUpdated,
      Waiting:false
    };
  });
  

  waiting = createDuck("Set Files to Upload", (state: ITestHarnessContainer, waiting: boolean) => {
    return {
      ...state,
      Waiting: waiting
    };
  });
  hasErrorLoading = createDuck("Set Files to Upload", (state: ITestHarnessContainer, hasErrorLoading: boolean) => {
    return {
      ...state,
      HasErrorLoading: hasErrorLoading,
      Waiting:false
    };
  });
  //beginLoadCameras = createDuck("Begin Uploading Files", dispatch<void>());

  saveTestCases = createDuck("Save Test Cases", dispatch<ISaveRequest>());



  resetState = createDuck("Set Files to Upload", (state: ITestHarnessContainer) => {
    return {
      ...initialState,
    };
  });
}

const initialState: ITestHarnessContainer = {
  isUpdated:false,
  Waiting:false,
  HasErrorLoading:false,
};

export const testHarnessContainerReducer = getReducer(initialState, TestHarnessContainerFacade);
export const testHarnessContainerActions = getActions(TestHarnessContainerFacade);