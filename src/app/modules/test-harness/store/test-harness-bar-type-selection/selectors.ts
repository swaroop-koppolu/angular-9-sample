import { createFeatureSelector, createSelector, MemoizedSelector } from "@ngrx/store";
import * as FeatureKeys from "../feature-keys";
import { ITestHarnessModuleState } from "..";
import { ITestHarnessBarTypeSelection } from "./state";

export const testHarnessFeature = createFeatureSelector<ITestHarnessModuleState>(FeatureKeys.testHarnessFeatureKey);


export const testHarnessBarTypeSelectionState = createSelector(
  testHarnessFeature, (state: ITestHarnessModuleState) => state.testHarnessBarTypeSelectionComponent
);

  export const isWaiting =
  createSelector(testHarnessBarTypeSelectionState, (state: ITestHarnessBarTypeSelection) => state.Waiting);

  export const hasErrorLoading =
  createSelector(testHarnessBarTypeSelectionState, (state: ITestHarnessBarTypeSelection) => state.HasErrorLoading);

  export const isUpdated =
  createSelector(testHarnessBarTypeSelectionState, (state: ITestHarnessBarTypeSelection) => state.isUpdated);


  export const CWR =
  createSelector(testHarnessBarTypeSelectionState, (state: ITestHarnessBarTypeSelection) => state.CWR);

  export const ClassType =
  createSelector(testHarnessBarTypeSelectionState, (state: ITestHarnessBarTypeSelection) => state.ClassType);


  export const Latitude =
  createSelector(testHarnessBarTypeSelectionState, (state: ITestHarnessBarTypeSelection) => state.Latitude);

  export const Longitude =
  createSelector(testHarnessBarTypeSelectionState, (state: ITestHarnessBarTypeSelection) => state.Longitude);

  export const testCases =
  createSelector(testHarnessBarTypeSelectionState, (state: ITestHarnessBarTypeSelection) => state.testCases);
  
  export const classTypes =
  createSelector(testHarnessBarTypeSelectionState, (state: ITestHarnessBarTypeSelection) => state.classTypes);
  