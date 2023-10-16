import { TestHarnessService } from "../../services/test-harness.service";
import { switchMap, tap, takeUntil, first, delay, catchError, withLatestFrom, map, concatMapTo, concatMap, mergeMap, mergeMapTo, switchMapTo } from "rxjs/operators";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { testHarnessBarTypeSelectionActions,  TestHarnessBarTypeSelectionFacade} from "./facade";
import { Injectable, OnDestroy } from "@angular/core";
import { Subject, of } from "rxjs";


@Injectable()
export class TestHarnessBarTypeSelectionEffects implements OnDestroy {
  destroyed$ = new Subject();

  constructor(private actions$: Actions, private testHarnessService: TestHarnessService, private facade: TestHarnessBarTypeSelectionFacade) { }



  loadTestCases = createEffect(() => this.actions$
    .pipe(
      ofType(testHarnessBarTypeSelectionActions.loadTestCases),
      switchMap(() => {
        testHarnessBarTypeSelectionActions.setwaiting(true);
        return this.testHarnessService.getTestCasesForJoints()
          .pipe(
            map((httpResp: any) => {
              // console.log("TCL: httpResp", httpResp);
              return testHarnessBarTypeSelectionActions.setTestCases(httpResp)
            }),
            catchError((error: Error, caught: any) => {
              return of(testHarnessBarTypeSelectionActions.hasErrorLoading(true));
            })
          );
      }),
      takeUntil(this.destroyed$)
    ));

    loadClassTypes = createEffect(() => this.actions$
    .pipe(
      ofType(testHarnessBarTypeSelectionActions.loadClassTypes),
      switchMap(() => {
        testHarnessBarTypeSelectionActions.setwaiting(true);
        return this.testHarnessService.getClassTypes()
          .pipe(
            map((httpResp: any) => {
              // console.log("TCL: httpResp", httpResp);
              return testHarnessBarTypeSelectionActions.setClassTypes(httpResp)
            }),
            catchError((error: Error, caught: any) => {
              return of(testHarnessBarTypeSelectionActions.hasErrorLoading(true));
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