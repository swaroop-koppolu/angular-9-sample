import { Component, OnInit, ChangeDetectionStrategy, ViewChild, OnDestroy, ChangeDetectorRef, AfterViewInit, Inject, ElementRef, Renderer2 } from "@angular/core";
//import { AddDefectHotKeysEnum } from "./upload-blob.hotkeys.enum";
import { ShortcutInput, KeyboardShortcutsComponent, KeyboardShortcutsHelpComponent, AllowIn } from "ng-keyboard-shortcuts";
import { takeUntil, tap, map, filter, distinctUntilChanged } from "rxjs/operators";
import { Subject, combineLatest, fromEvent } from "rxjs";
import { Router } from "@angular/router";
import { DOCUMENT } from "@angular/common";
import { UploadBlobFacade } from "@modules/storage-explorer/store/upload-blob";
import { FileUpload } from "primeng/fileupload";
import { IFileTemplateConfig } from "@modules/storage-explorer/model";

@Component({
  selector: 'app-upload-blob',
  templateUrl: './upload-blob.component.html',
  styleUrls: ['./upload-blob.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UploadBlobComponent implements OnInit , OnDestroy, AfterViewInit {
  Array = Array;

  destroyed$ = new Subject();
  shortcuts: ShortcutInput[] = [];
  //hotkeysEnum = AddDefectHotKeysEnum;

  filesToUpload: File[] = [];
  filesFailedToUpload: File[] = [];
  filesSuccessfullyUploaded: File[] = [];
  @ViewChild(KeyboardShortcutsComponent, { static: true }) private keyboard: KeyboardShortcutsComponent;

  @ViewChild(FileUpload, { static: true }) fileUploaderEl: FileUpload;
  progressPercentage = 0;
  constructor(private cd: ChangeDetectorRef, private facade: UploadBlobFacade, private router: Router, @Inject(DOCUMENT) private doc: Document, private renderer: Renderer2) {
  }


  ngOnInit(): void {
    this.getStateFiles();
    this.cd.markForCheck();
  }

  ngAfterViewInit(): void { }

  ngOnDestroy(): void {
    this.facade.resetState.dispatch();
    this.destroyed$.next();
    this.destroyed$.complete();
  }

 
  upload(event: any): void {
    if (event.files != null && event.files.length > 0) {
      this.filesToUpload = [...event.files];
      this.facade.setFilesToUpload.dispatch(this.filesToUpload);
      this.facade.beginUpload.dispatch(this.filesToUpload);
      this.fileUploaderEl.clear();
    }
  }

  getStateFiles(): void {
    combineLatest([this.facade.select.filesToUpload, this.facade.select.filesUploadedSuccessfully, this.facade.select.filesFailedToUpload])
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe((files: [File[], File[], File[]]) => {
        const filesToUpload = [...files[0]];
        this.filesSuccessfullyUploaded = [...files[1]];
        this.filesFailedToUpload = [...files[2]];

        if (this.filesToUpload.length === 0) {
          this.setProgressPercentage(0);
          this.filesToUpload = filesToUpload;
        } else {
          this.calculateProgressPercentageInterval();
        }
        this.cd.markForCheck();
      });
  }

  private calculateProgressPercentageInterval(): void {
    const progress = ((this.filesSuccessfullyUploaded.length + this.filesFailedToUpload.length) * 100) / this.filesToUpload.length;
    setInterval(() => this.incrementProgressPercentage(progress), 100);
  }

  private setProgressPercentage(num: number): void {
    setTimeout(() => {
      this.progressPercentage = num;
      this.cd.markForCheck();
    }, 1000);
  }

  private incrementProgressPercentage(max: number): void {
    while (this.progressPercentage <= max) {
      this.progressPercentage = this.progressPercentage + 1;
      this.cd.markForCheck();
    }
  }
  // get successFileTemplateConfig(): any {
  //   return { files: this.filesSuccessfullyUploaded, title: "File successfully uploaded", messageSeverity: "success" };
  // }

  // get failedFileTemplateConfig(): any {
  //   return { files: this.filesFailedToUpload, title: "File upload failed", messageSeverity: "error" };
  // }

  get successFileTemplateConfig(): IFileTemplateConfig {
    return { files: this.filesSuccessfullyUploaded, title: "File successfully uploaded", messageSeverity: "success" };
  }

  get failedFileTemplateConfig(): IFileTemplateConfig {
    return { files: this.filesFailedToUpload, title: "File upload failed", messageSeverity: "error" };
  }


  // private setupKeyBoardShorcuts(): void {
  //   this.shortcuts.push(
  //     {
  //       key: AddDefectHotKeysEnum.AddDefect,
  //       preventDefault: true,
  //       label: "Defect Management",
  //       description: "Add Defect",
  //       allowIn: [AllowIn.Input, AllowIn.Select, AllowIn.Textarea],
  //       command: () => this.toggleSidebar()
  //     },
  //     {
  //       key: "shift",
  //       preventDefault: true,
  //       label: "Keyboard Shortcuts Help",
  //       description: "Keyboard Shift Key Icon",
  //       command: () => { }
  //     }
  //   );
  //   this.keyboard.select(AddDefectHotKeysEnum.AddDefect).pipe(takeUntil(this.destroyed$)).subscribe((e: any) => {
  //   });
  // }

}
