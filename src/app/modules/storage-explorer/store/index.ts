import { Action,combineReducers,MetaReducer } from '@ngrx/store';

import {IUploadBlobComponentState} from './upload-blob/state';
import {uploadBlobComponentReducer} from './upload-blob/facade';


export interface IStorageExplorerModuleState
{
    uploadBlobComponent:IUploadBlobComponentState
}


export function reducers(state:IStorageExplorerModuleState,action:Action):IStorageExplorerModuleState{

    return combineReducers<IStorageExplorerModuleState>({uploadBlobComponent:uploadBlobComponentReducer})(state,action)
}

export const  metaReducers:MetaReducer<IStorageExplorerModuleState>[]=[]