import { createFeatureSelector, createSelector, MemoizedSelector } from "@ngrx/store";
import * as FeatureKeys from "../feature-keys";
import { ITestHarnessModuleState } from "..";
import { IJointTypeTestCaseGlobalSettings } from "./state";
export const storageExplorerFeature = createFeatureSelector<ITestHarnessModuleState>(FeatureKeys.testHarnessFeatureKey);

export const testHarnessGlobalState = createSelector(
  storageExplorerFeature, (state: ITestHarnessModuleState) => state.testBedGlobalValuesComponent
);

export const Name =
  createSelector(testHarnessGlobalState, (state: IJointTypeTestCaseGlobalSettings) => state.Name);
export const CameraIds =
  createSelector(testHarnessGlobalState, (state: IJointTypeTestCaseGlobalSettings) => state.CameraIds);

export const SampleImagePath =
  createSelector(testHarnessGlobalState, (state: IJointTypeTestCaseGlobalSettings) => state.SampleImagePath);

  export const Cameras =
  createSelector(testHarnessGlobalState, (state: IJointTypeTestCaseGlobalSettings) => state.Cameras);


  export const isWaiting =
  createSelector(storageExplorerFeature, (state: ITestHarnessModuleState) => state.testBedGlobalValuesComponent.Waiting);

  export const hasErrorLoading =
  createSelector(storageExplorerFeature, (state: ITestHarnessModuleState) => state.testBedGlobalValuesComponent.HasErrorLoading);

