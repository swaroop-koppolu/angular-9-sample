import { Component, OnInit,OnDestroy } from '@angular/core';
import { Subject } from "rxjs";
import { UploadBlobFacade } from "@modules/storage-explorer/store/upload-blob";
@Component({
  selector: 'app-model-training-image-upload',
  templateUrl: './model-training-image-upload.component.html',
  styleUrls: ['./model-training-image-upload.component.scss']
})
export class ModelTrainingImageUploadComponent implements OnInit, OnDestroy {

  destroyed$ = new Subject();

  constructor(private facade: UploadBlobFacade) {
  }
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
  isOpen(){

  }
  openModelTraining(){

  }
}
