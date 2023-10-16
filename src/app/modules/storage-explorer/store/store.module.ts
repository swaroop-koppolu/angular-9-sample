import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule,ActionReducer,MetaReducer } from '@ngrx/store';
import {storageExplorerFeatureKey} from "./feature-keys";
import { reduce } from 'rxjs/operators';
import {reducers} from "./"
import {UploadBlobEffects} from "./upload-blob"


export const metaReducer:MetaReducer<any>[]=[]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    //StoreModule.forRoot({}), 
    StoreModule.forFeature(storageExplorerFeatureKey,reducers),
    
    EffectsModule.forFeature([UploadBlobEffects])
  ]
  ,providers:[UploadBlobEffects]
})
export class StorageExplorerStoreModule { }
