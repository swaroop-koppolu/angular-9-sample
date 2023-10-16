import { createFeatureSelector, createSelector, MemoizedSelector } from "@ngrx/store";
import * as FeatureKeys from "../feature-keys";
import { IStorageExplorerModuleState } from "..";

export const storageExplorerFeature = createFeatureSelector<IStorageExplorerModuleState>(FeatureKeys.storageExplorerFeatureKey);

export const error =
  createSelector(storageExplorerFeature, (state: IStorageExplorerModuleState) => state.uploadBlobComponent.error);
export const isLoading =
  createSelector(storageExplorerFeature, (state: IStorageExplorerModuleState) => state.uploadBlobComponent.isLoading);

export const filesToUpload =
  createSelector(storageExplorerFeature, (state: IStorageExplorerModuleState) => state.uploadBlobComponent.filesToUpload);
export const filesFailedToUpload =
  createSelector(storageExplorerFeature, (state: IStorageExplorerModuleState) => state.uploadBlobComponent.filesFailedToUpload);
export const filesUploadedSuccessfully =
  createSelector(storageExplorerFeature, (state: IStorageExplorerModuleState) => state.uploadBlobComponent.filesUploadedSuccessfully);