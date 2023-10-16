import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StorageExplorerComponent } from "./components/storage-explorer.component";


const routes: Routes = [{ path: "", component: StorageExplorerComponent }];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StorageExplorerRoutingModule { }
