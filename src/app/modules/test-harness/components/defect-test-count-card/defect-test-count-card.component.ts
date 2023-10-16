import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
//import { TestHarnessFacadeService } from './../../services/test-harness-facade.service';
import { IDefectTest } from "../../models/models";
import { FormControl } from "@angular/forms";

import { Observable, Subject } from "rxjs";
//import { Events } from "../../services/test-harness-enum-events";

@Component({
  selector: 'app-defect-test-count-card',
  templateUrl: './defect-test-count-card.component.html',
  styleUrls: ['./defect-test-count-card.component.scss']
})
export class DefectTestCountCardComponent implements OnInit {
  defectCopy: IDefectTest;
  @Input()
  set defect(value: IDefectTest) {
    this.defectCopy = {...value};
    this.defectCount.setValue(this.defectCopy.Count);
  }
  defectCountChanged$: Subject<IDefectTest> = new Subject();
  defectCount: FormControl = new FormControl();
  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line: deprecation
    //this.facadeService.setStream(Events.JointBarTypeTestCase_DefectTestCountChanged, this.defectCountChanged$.asObservable());

    this.defectCount.valueChanges.subscribe(value =>  {
      this.defectCopy.Count = value;
      console.log('sendnig defect');
      this.defectCountChanged$.next({...this.defectCopy});
    } );
  }
}
