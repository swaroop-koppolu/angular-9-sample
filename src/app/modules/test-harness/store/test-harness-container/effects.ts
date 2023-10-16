import { TestHarnessService } from "../../services/test-harness.service";
import { switchMap, tap, takeUntil, first, delay, catchError, withLatestFrom, map, concatMapTo, concatMap, mergeMap, mergeMapTo, switchMapTo } from "rxjs/operators";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { testHarnessContainerActions, TestHarnessContainerFacade } from "./facade";
import { Injectable, OnDestroy } from "@angular/core";
import { Subject, of } from "rxjs";
import { ISaveRequest } from "../../models/models";

@Injectable()
export class TestHarnessContainerEffects implements OnDestroy {
  destroyed$ = new Subject();

  constructor(private actions$: Actions, private testHarnessService: TestHarnessService, private facade: TestHarnessContainerFacade) { }



  saveTestCases = createEffect(() => this.actions$
    .pipe(
      ofType(testHarnessContainerActions.saveTestCases),
      switchMap((params: { payload: ISaveRequest }) => {
        testHarnessContainerActions.waiting(true);
        return this.testHarnessService.submitTestCasesForJoints(params.payload, true, "Creating test cases, Please wait..")
          .pipe(
            map((httpResp: any) => {
              // console.log("TCL: httpResp", httpResp);
              return testHarnessContainerActions.isUpdated(true);
            }),
            catchError((error: Error, caught: any) => {
              return of(testHarnessContainerActions.hasErrorLoading(true));
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