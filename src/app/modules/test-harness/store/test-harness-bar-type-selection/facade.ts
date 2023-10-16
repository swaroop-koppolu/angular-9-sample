import { StoreFacade, createDuck, bindSelectors, getActions, getReducer, dispatch } from "@ngrx-ducks/core";
import * as Selectors from "./selectors";
import { ITestHarnessBarTypeSelection } from "./state";
import { IJointBarTypeTestCase } from "../../models/models";
@StoreFacade()
export class TestHarnessBarTypeSelectionFacade {
  constructor() { }
  select = bindSelectors(Selectors);


  

  setwaiting = createDuck("Set Waiting State", (state: ITestHarnessBarTypeSelection, waiting: boolean) => {
    return {
      ...state,
      Waiting: waiting,
      HasErrorLoading:false
    };
  });
  hasErrorLoading = createDuck("Set Error State", (state: ITestHarnessBarTypeSelection, hasErrorLoading: boolean) => {
    return {
      ...state,
      HasErrorLoading: hasErrorLoading,
      Waiting:false
    };
  });
  setTestCases = createDuck("update Test Cases", (state: ITestHarnessBarTypeSelection, testCases:IJointBarTypeTestCase[] ) => {
    return {
      ...state,
      testCases: [...testCases],
      isUpdated:true,
      Waiting:false
    };
  });
  setCWR = createDuck("update Fiter cwr", (state: ITestHarnessBarTypeSelection, cwr:boolean ) => {
    return {
      ...state,
      CWR: cwr
    };
  });
  setClassType = createDuck("update Fiter classType", (state: ITestHarnessBarTypeSelection, classType:number ) => {
    return {
      ...state,
      ClassType: classType
    };
  });

  setLatitude = createDuck("update Fiter latitude", (state: ITestHarnessBarTypeSelection, latitude:number ) => {
    return {
      ...state,
      Latitude: latitude
    };
  });

  setLongitude = createDuck("update Fiter longitude", (state: ITestHarnessBarTypeSelection, longitude:number ) => {
    return {
      ...state,
      Longitude: longitude
    };
  });

  setClassTypes = createDuck("update Fiter longitude", (state: ITestHarnessBarTypeSelection, classTypes:number[] ) => {
    return {
      ...state,
      classTypes: classTypes
    };
  });

  //beginLoadCameras = createDuck("Begin Uploading Files", dispatch<void>());

  filter = createDuck("Save Test Cases", dispatch<any>());
  loadTestCases = createDuck("LoadTestCases", dispatch<void>());
  loadClassTypes = createDuck("LoadTestCases", dispatch<void>());

  resetState = createDuck("reset filter", (state: ITestHarnessBarTypeSelection) => {
    return {
      ...initialState,
    };
  });
}

const initialState: ITestHarnessBarTypeSelection = {
  isUpdated:false,
  Waiting:false,
  HasErrorLoading:false,
  CWR:false,
  ClassType:0,
  Longitude:0,
  Latitude:0,
  testCases:[] ,
  classTypes:[]
};

export const testHarnessBarTypeSelectionReducer = getReducer(initialState, TestHarnessBarTypeSelectionFacade);
export const testHarnessBarTypeSelectionActions = getActions(TestHarnessBarTypeSelectionFacade);