import { Component, OnInit, Output, EventEmitter, Input, ViewChild,OnDestroy } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable, Subject, combineLatest, fromEvent  } from "rxjs";
import { startWith,takeUntil, tap, map, filter, distinctUntilChanged } from "rxjs/operators";
import { TestBedGlobalFacade } from "@modules/test-harness/store/test-bed-global-values";
@Component({
  selector: 'app-test-bed-global-values',
  templateUrl: './test-bed-global-values.component.html',
  styleUrls: ['./test-bed-global-values.component.scss']
})
export class TestBedGlobalValuesComponent implements OnInit ,OnDestroy{
  model: FormGroup = new FormGroup( {
    Name: new FormControl(null, Validators.required),
    CameraIds: new FormControl([], Validators.required),
    SampleImagePath: new FormControl(null, Validators.required),

  });
  cameras:any[];
  destroyed$ = new Subject();
  //cameras$: Observable<any[]>;
    isUpdated :boolean;
    isWaiting :boolean;
    hasErrorLoading :boolean;
  constructor(private facade: TestBedGlobalFacade) { }
  ngOnDestroy(): void {
    this.facade.resetState.dispatch();
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  getState(): void {
    combineLatest([this.facade.select.Cameras, this.facade.select.isWaiting, this.facade.select.hasErrorLoading])
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe((state: [number[], boolean, boolean]) => {
        this. cameras = state[0].map((val)=>{return {"label":val,"value":val}});;
        this.isWaiting = state[1];
        this.hasErrorLoading = state[2];
      });
  }

  ngOnInit() {
    this.getState();
    this.facade.loadCameras.dispatch();
  }


}
