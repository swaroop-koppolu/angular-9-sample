import { HttpService } from "../../services/http.service";
import { switchMap, tap, takeUntil, first, delay, catchError, withLatestFrom, map, concatMapTo, concatMap, mergeMap, mergeMapTo, switchMapTo } from "rxjs/operators";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { uploadBlobActions, UploadBlobFacade } from "./facade";
import { Injectable, OnDestroy } from "@angular/core";
import { Subject, of } from "rxjs";
//import { AuthService } from "@core/auth/auth.service";

@Injectable()
export class UploadBlobEffects implements OnDestroy {
  destroyed$ = new Subject();

  // constructor(private actions$: Actions, private httpSvc: HttpService, private authSvc: AuthService, private facade: UploadBlobFacade) { }

  constructor(private actions$: Actions, private httpSvc: HttpService, private facade: UploadBlobFacade) { }

  beginUpload = createEffect(() => this.actions$
    .pipe(
      ofType(uploadBlobActions.beginUpload),
      switchMap((params: { payload: File[] }) => {
        const resp = params.payload.map((file: File) => uploadBlobActions.uploadFile(file));
        return resp;
      }),
      takeUntil(this.destroyed$)
    ));

  uploadFile = createEffect(() => this.actions$
    .pipe(
      ofType(uploadBlobActions.uploadFile),
      mergeMap((params: { payload: File }) => {
        const file: File = params.payload;
        return this.httpSvc.uploadForImageTraining(params.payload)
          .pipe(
            map((httpResp: any) => {
              // console.log("TCL: httpResp", httpResp);
              return uploadBlobActions.setFileUploadedSuccessfully(file);
            }),
            catchError((error: Error, caught: any) => {
              return of(uploadBlobActions.setFilesUploadedFailed(params.payload));
            })
          );
      }),
      takeUntil(this.destroyed$)
    ));

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}