
import { Component, OnInit, Input } from "@angular/core";
import { IJointBarTypeTestCase } from "./../../models/models";
import { Observable } from "rxjs";
@Component({
  selector: 'app-test-cases-selection',
  templateUrl: './test-cases-selection.component.html',
  styleUrls: ['./test-cases-selection.component.scss']
})
export class TestCasesSelectionComponent implements OnInit {
  selectedTestCases: IJointBarTypeTestCase[] = [];
  cols: any[] = [];
  constructor() { }
  @Input() testCases$: Observable<IJointBarTypeTestCase[]>;

  ngOnInit() {
    this.cols = [{ field: "Name", header: "Name" },
      { field: "Description", header: "Description" },
      { field: "Priority", header: "Priority" },
      { field: "Count", header: "Count", type: "text" }];
  }

}