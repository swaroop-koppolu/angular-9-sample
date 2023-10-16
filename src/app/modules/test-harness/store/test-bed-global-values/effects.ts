import { TestHarnessService } from "../../services/test-harness.service";
import { switchMap, tap, takeUntil, first, delay, catchError, withLatestFrom, map, concatMapTo, concatMap, mergeMap, mergeMapTo, switchMapTo } from "rxjs/operators";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { testBedGlobalActions, TestBedGlobalFacade } from "./facade";
import { Injectable, OnDestroy } from "@angular/core";
import { Subject, of } from "rxjs";


//import { AuthService } from "@core/auth/auth.service";

@Injectable()
export class TestBedGlobalEffects implements OnDestroy {
  destroyed$ = new Subject();

  // constructor(private actions$: Actions, private httpSvc: HttpService, private authSvc: AuthService, private facade: UploadBlobFacade) { }

  constructor(private actions$: Actions, private testHarnessService: TestHarnessService, private facade: TestBedGlobalFacade) { }

  // beginLoadCameras = createEffect(() => this.actions$
  //   .pipe(
  //     ofType(testBedGlobalActions.beginLoadCameras),
  //     switchMap(() => {
  //       testBedGlobalActions.setWaiting();
  //       const resp = testBedGlobalActions.loadCameras();
  //     }),
  //     takeUntil(this.destroyed$)
  //   ));

  
  // updateName = createEffect(() => this.actions$
  //   .pipe(
  //     ofType(testBedGlobalActions.updateName),
  //     switchMap((params: { payload: string })  => {
  //       return this.testBedGlobalActions.setName(params.payload)
  //     }),
  //     takeUntil(this.destroyed$)
  //   ));

    loadCameras = createEffect(() => this.actions$
    .pipe(
      ofType(testBedGlobalActions.loadCameras),
      switchMap(() => {
        testBedGlobalActions.waiting(true);
        return this.testHarnessService.getCameras()
          .pipe(
            map((httpResp: any) => {
              // console.log("TCL: httpResp", httpResp);
              return testBedGlobalActions.setCameras(httpResp);
            }),
            catchError((error: Error, caught: any) => {
             // testBedGlobalActions.waiting(true);
              return of(testBedGlobalActions.hasErrorLoading(true));
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