import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageExplorerStoreModule } from "./store/store.module";
import { StorageExplorerRoutingModule } from './storage-explorer-routing.module';
import { StorageExplorerComponent } from './components/storage-explorer.component';
import { ModelTrainingImageUploadComponent } from './components/model-training-image-upload/model-training-image-upload.component';
import { UploadBlobComponent } from './components/upload-blob/upload-blob.component';
import { HttpService } from "./services/http.service";
import { PrimengModule } from "@modules/prime-ng/primeng/primeng.module";

@NgModule({
  declarations: [StorageExplorerComponent, ModelTrainingImageUploadComponent, UploadBlobComponent],
  imports: [
    CommonModule,
    PrimengModule,
    StorageExplorerRoutingModule,
    StorageExplorerStoreModule,
  ] ,
  providers: [StorageExplorerComponent, HttpService],
  exports: [UploadBlobComponent]
})
export class StorageExplorerModule { }
