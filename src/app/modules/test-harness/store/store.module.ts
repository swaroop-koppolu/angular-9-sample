import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule,ActionReducer,MetaReducer } from '@ngrx/store';
import {testBedGlobalFeatureKey,testHarnessBarTypeSelectionFeatureKey,testHarnessContainerFeatureKey} from "./feature-keys";
import { reduce } from 'rxjs/operators';
import {reducers} from "./"
import {TestBedGlobalEffects} from "./test-bed-global-values"
import {TestHarnessBarTypeSelectionEffects} from "./test-harness-bar-type-selection"
import {TestHarnessContainerEffects} from "./test-harness-container"
import {testHarnessFeatureKey} from "./feature-keys"

export const metaReducer:MetaReducer<any>[]=[]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    //StoreModule.forRoot({}), 
    StoreModule.forFeature(testHarnessFeatureKey,reducers),
    
    EffectsModule.forFeature([TestBedGlobalEffects,TestHarnessBarTypeSelectionEffects,TestHarnessContainerEffects])
  ]
  ,providers:[TestBedGlobalEffects,TestHarnessBarTypeSelectionEffects,TestHarnessContainerEffects]
})
export class TestHarnessStoreModule { }
