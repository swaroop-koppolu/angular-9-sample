import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
  {  path: 'storageExplorer', loadChildren: 'src/app/modules/storage-explorer.module#StorageExplorerModule' ,data: {
    title: 'Storage Explorer Module',
    createSidebarEntry: true,
    pathDisplayText: 'Storage Explorer Module',
    pathIcon: 'pi-users',
    "order": 2,
    "module":"user",
    "subModule":"user",
    "modulePath":"user",
    "moduleRef":"UserModule",
    "routeLevel":1,
    "hasChildRotes":true
  }},{  path: 'testExplorer', loadChildren: 'src/app/modules/test-harness/test-harness.module#TestHarnessModule' ,data: {
    title: 'Test Explorer Module',
    createSidebarEntry: true,
    pathDisplayText: 'Test Explorer Module',
    pathIcon: 'pi-users',
    "order": 2,
    "module":"user",
    "subModule":"user",
    "modulePath":"user",
    "moduleRef":"UserModule",
    "routeLevel":1,
    "hasChildRotes":true
  }}]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes,{ enableTracing: false } ),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
