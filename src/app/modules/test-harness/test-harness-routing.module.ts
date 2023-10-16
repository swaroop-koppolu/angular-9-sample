import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestHarnessContainerComponent } from "./components/test-harness-container/test-harness-container.component";


const routes: Routes = [
  { path: "", redirectTo: "test", pathMatch: "full" },
  { path: "**", redirectTo: "test", pathMatch: "full" },
  { path: "test", component: TestHarnessContainerComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestHarnessRoutingModule { }
