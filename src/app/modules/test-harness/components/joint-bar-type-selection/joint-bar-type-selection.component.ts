
import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ChangeDetectorRef } from "@angular/core";
import { ILatLong } from '../../models/models';
import { IJointBarTypeTestCase, IDefectTest, IJointTypeTestCaseGlobalSettings } from "./../../models/models";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Table } from "primeng/table";
import { TestHarnessBarTypeSelectionFacade } from "@modules/test-harness/store/test-harness-bar-type-selection";
import { TestBedGlobalFacade } from "@modules/test-harness/store/test-bed-global-values";
import { Observable, Subject, fromEvent, combineLatest, from ,BehaviorSubject} from "rxjs";
import { startWith,takeUntil, tap, map, filter, distinctUntilChanged } from "rxjs/operators";
@Component({
  selector: 'app-joint-bar-type-selection',
  templateUrl: './joint-bar-type-selection.component.html',
  styleUrls: ['./joint-bar-type-selection.component.scss']
})
export class JointBarTypeSelectionComponent implements OnInit {
  destroyed$ = new Subject();
  cols: any[] =  [];
  cwr;
  classType;
  Longitude;
  Latitude;
  classTypes;
 isUpdated :boolean;
  isWaiting :boolean;
  hasErrorLoading :boolean;
  testCases: IJointBarTypeTestCase[] = [];
  globalSettings: IJointTypeTestCaseGlobalSettings;
  model: FormGroup = new FormGroup({
    cwr: new FormControl(false),
    classType: new FormControl(1),
    Longitude: new FormControl(null, Validators.required),
    Latitude: new FormControl(null, Validators.required)
  });

  editingTestCases$: BehaviorSubject<IJointBarTypeTestCase[]> = new BehaviorSubject([]);
 
  formValid: boolean;
  unChangedTestCases: IJointBarTypeTestCase[] = [];

  expandedRows: any[] = [];

  @ViewChild(Table, {static: true}) table: Table;
  @ViewChild("testCasesModel", { static: true }) testCasesModel: FormGroup;

  constructor( private changeDetectionRef: ChangeDetectorRef,private facade: TestHarnessBarTypeSelectionFacade,private globalFacade: TestBedGlobalFacade) { }

  ngOnInit() {

    //this.initControls();
    this.getState();

    this.setupTableColumns();
    this.facade.loadClassTypes.dispatch();
    this.facade.loadTestCases.dispatch();
  }

  getState(): void {
    combineLatest([this.facade.select.isUpdated, this.facade.select.isWaiting, this.facade.select.hasErrorLoading,this.facade.select.CWR,this.facade.select.ClassType,this.facade.select.Latitude,this.facade.select.Longitude,this.facade.select.testCases,this.facade.select.classTypes])
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe((state: [boolean, boolean, boolean,boolean,number[],number,number,[],number[]]) => {
        this. isUpdated = state[0];
        this.isWaiting = state[1];
        this.hasErrorLoading = state[2];
        this.cwr = state[3];
        this.classType=state[4];
        this.Latitude=state[5];
        this.Longitude=state[6];
        this.testCases=state[7];
        this.classTypes=state[8].map((val)=>{return {"label":val,"value":val}});
        
      
      });
  }


  private setupTableColumns() {
    this.cols = [
      { field: "JointType", header: "Joint Type" },
      { field: "NormalJointCount", header: "Normal Test Count", align: "center", controlType: "input" },
      { field: "negativeTestCaseCount", header: "Negative Test Count", align: "center" },
    ];
  }
  handleChange(value) {

  }

  exclude(changedTestCase: IJointBarTypeTestCase) {
  }
  // private initControls() {
  //   this.model.controls.classType.setValue(1);
  //   this.model.controls.cwr.setValue(false);
  // }

 



}
