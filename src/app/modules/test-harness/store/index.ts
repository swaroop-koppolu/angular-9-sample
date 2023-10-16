import { Action,combineReducers,MetaReducer } from '@ngrx/store';

import {IJointTypeTestCaseGlobalSettings} from './test-bed-global-values';
import {ITestHarnessContainer} from './test-harness-container';
import {ITestHarnessBarTypeSelection} from './test-harness-bar-type-selection';
import {testBedGlobalComponentReducer} from './test-bed-global-values/facade';
import {testHarnessContainerReducer} from './test-harness-container/facade';

import {testHarnessBarTypeSelectionReducer} from './test-harness-bar-type-selection/facade';


export interface ITestHarnessModuleState
{
    testBedGlobalValuesComponent:IJointTypeTestCaseGlobalSettings,
    testHarnessContainerComponent:ITestHarnessContainer,
    testHarnessBarTypeSelectionComponent:ITestHarnessBarTypeSelection,
    
}

export function reducers(state:ITestHarnessModuleState,action:Action):ITestHarnessModuleState{

    return combineReducers<ITestHarnessModuleState>({testBedGlobalValuesComponent:testBedGlobalComponentReducer,testHarnessContainerComponent:testHarnessContainerReducer,testHarnessBarTypeSelectionComponent:testHarnessBarTypeSelectionReducer})(state,action)
}

export const  metaReducers:MetaReducer<ITestHarnessModuleState>[]=[]