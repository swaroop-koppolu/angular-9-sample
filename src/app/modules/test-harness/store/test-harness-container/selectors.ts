import { createFeatureSelector, createSelector, MemoizedSelector } from "@ngrx/store";
import * as FeatureKeys from "../feature-keys";
import { ITestHarnessModuleState } from "..";

export const testHarnessFeature = createFeatureSelector<ITestHarnessModuleState>(FeatureKeys.testHarnessFeatureKey);

  export const isWaiting =
  createSelector(testHarnessFeature, (state: ITestHarnessModuleState) => state.testHarnessContainerComponent.Waiting);

  export const hasErrorLoading =
  createSelector(testHarnessFeature, (state: ITestHarnessModuleState) => state.testHarnessContainerComponent.HasErrorLoading);

  export const isUpdated =
  createSelector(testHarnessFeature, (state: ITestHarnessModuleState) => state.testHarnessContainerComponent.isUpdated);
