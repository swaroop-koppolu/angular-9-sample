import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef } from "@angular/core";
import { IJointBarTypeTestCase, IJointTypeTestCaseGlobalSettings } from "../../models/models";

import { Observable, Subject, fromEvent, combineLatest, from } from "rxjs";
import { ISaveRequest } from "../../models/models";
import { startWith,takeUntil, tap, map, filter, distinctUntilChanged } from "rxjs/operators";
import { TestHarnessContainerFacade } from "@modules/test-harness/store/test-harness-container";
import { TestBedGlobalFacade } from "@modules/test-harness/store/test-bed-global-values";
@Component({
  selector: 'app-test-harness-container',
  templateUrl: './test-harness-container.component.html',
  styleUrls: ['./test-harness-container.component.scss']
})
export class TestHarnessContainerComponent implements OnInit {
 
  destroyed$ = new Subject();
  selectedValue:String="global";
  //cameras$: Observable<any[]>;
sUpdated :boolean;
        isWaiting :boolean;
      hasErrorLoading :boolean;
      SampleImagePath:string;
      Name:string;
      CameraIds:number[];
  constructor(private facade: TestHarnessContainerFacade,private globalFacade: TestBedGlobalFacade) { }
  ngOnDestroy(): void {
    this.facade.resetState.dispatch();
    this.destroyed$.next();
    this.destroyed$.complete();
  }
 
 
  getState(): void {
    combineLatest([this.facade.select.isUpdated, this.facade.select.isWaiting, this.facade.select.hasErrorLoading,this.globalFacade.select.Name,this.globalFacade.select.CameraIds,this.globalFacade.select.SampleImagePath])
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe((state: [boolean, boolean, boolean,string,number[],string]) => {
        this. sUpdated = state[0];
        this.isWaiting = state[1];
        this.hasErrorLoading = state[2];
        this.Name = state[3];
        this.CameraIds=state[4];
        this.SampleImagePath=state[5];
        
        
      
      });
  }

  ngOnInit() {
    this.getState();
   
  }
  onSubmit(){
const saveRequest:ISaveRequest={
  TestId: "1",
  Name: this.Name ,
  CameraIds:  this.CameraIds,
  Class: 0,
  SampleImagesPath: this.SampleImagePath,
  IsCwr: false,
  Latitude: 0,
  Longitude: 0,
 // JointsTestCase: 
}
    this.facade.saveTestCases.dispatch(saveRequest);
  }

}
