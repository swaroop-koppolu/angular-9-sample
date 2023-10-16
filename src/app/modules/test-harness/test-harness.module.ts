// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// import { TestHarnessRoutingModule } from './test-harness-routing.module';
// import { DefectTestCountCardComponent } from './components/defect-test-count-card/defect-test-count-card.component';
// import { JointBarTypeSelectionComponent } from './components/joint-bar-type-selection/joint-bar-type-selection.component';
// import { TestBedGlobalValuesComponent } from './components/test-bed-global-values/test-bed-global-values.component';
// import { TestCasesSelectionComponent } from './components/test-cases-selection/test-cases-selection.component';


// @NgModule({
//   declarations: [DefectTestCountCardComponent, JointBarTypeSelectionComponent, TestBedGlobalValuesComponent, TestCasesSelectionComponent],
//   imports: [
//     CommonModule,
//     TestHarnessRoutingModule
//   ]
// })
// export class TestHarnessModule { }
import { NgModule } from "@angular/core";
import { TestHarnessContainerComponent } from "./components/test-harness-container/test-harness-container.component";
import { JointBarTypeSelectionComponent } from "./components/joint-bar-type-selection/joint-bar-type-selection.component";
import { TestHarnessRoutingModule } from "./test-harness-routing.module";
//import { DefectSelectionComponent } from "./components/defect-selection/defect-selection.component";
import { TestBedGlobalValuesComponent } from "./components/test-bed-global-values/test-bed-global-values.component";
import { TestCasesSelectionComponent } from "./components/test-cases-selection/test-cases-selection.component";
import { PrimengModule } from "@modules/prime-ng/primeng/primeng.module";
import { DefectTestCountCardComponent } from "./components/defect-test-count-card/defect-test-count-card.component";
import { KeyboardShortcutsModule } from "ng-keyboard-shortcuts";
//import { SharedModule } from "@shared/shared.module";
import { CommonModule } from '@angular/common';
// Services
import { TestHarnessService } from "./services/test-harness.service";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TestHarnessStoreModule } from "./store/store.module";
import { HistoryRunsComponent } from './components/history-runs/history-runs.component';
@NgModule({
  declarations: [
    TestHarnessContainerComponent,
    JointBarTypeSelectionComponent,
    //DefectSelectionComponent,
    TestBedGlobalValuesComponent,
    TestCasesSelectionComponent,
    DefectTestCountCardComponent,
    HistoryRunsComponent
  ],
  imports: [
    // SharedModule,
    CommonModule,
    PrimengModule,
    KeyboardShortcutsModule,
    TestHarnessRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TestHarnessStoreModule
  ],
  providers: [
    TestHarnessService
  ]
})
export class TestHarnessModule { }