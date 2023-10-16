import { Injectable } from '@angular/core';
import { shareReplay } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { SelectedJointTypeTestCases, IJointBarTypeTestCase, ISaveRequest, ILatLong } from "@test-harness/models/models";
//import { AppConfig } from "@src/app/app.config";
@Injectable({
  providedIn: 'root'
})
export class TestHarnessService {

  // baseUrl = AppConfig.settings.testHarnessApi.baseUrl;
  // endPoints = AppConfig.settings.testHarnessApi.endPoints;
  baseUrl = "AppConfig.settings.testHarnessApi.baseUrl";
  endPoints = "AppConfig.settings.testHarnessApi.endPoints";
  constructor(private http: HttpClient) { }

  public getTestCasesForJoints(): Observable<IJointBarTypeTestCase[]> {
    //const url = this.baseUrl + this.endPoints.getTestCasesForJoints;
    const url = this.baseUrl + "this.endPoints.getTestCasesForJoints";
    return this.http.get<IJointBarTypeTestCase[]>(url)
      .pipe(
        shareReplay(1) // this is a static data, so we can use cached values.
      );
  }


  // tslint:disable-next-line: no-shadowed-variable
  public submitTestCasesForJoints(testCases: ISaveRequest, shouldBlock: boolean, waitMessage: string): Observable<SelectedJointTypeTestCases> {
    const url = this.baseUrl + "this.endPoints.submitTestCasesForJoints";

    const httpHeaders: HttpHeaders = new HttpHeaders({ shouldBlock: "shouldBlock", waitMessage });

    const options = {
      headers: httpHeaders
    };
    return this.http.post<any>(url, testCases, shouldBlock ? options : null);
  }

  public getLatLong(): Observable<ILatLong[]> {
    return of([
      { classType: 1, cwr: false, latitude: 47.719055, longitude: -111.68866 },
      { classType: 2, cwr: false, latitude: 40.823956, longitude: -96.705315 },
      { classType: 3, cwr: false, latitude: 43.014145, longitude: -106.535568 },
      { classType: 4, cwr: false, latitude: 46.341198, longitude: -109.155731 },
      { classType: 5, cwr: false, latitude: null, longitude: null },
      { classType: 1, cwr: true, latitude: 35.2434099, longitude: -101.682021 },
      { classType: 2, cwr: true, latitude: 35.2434099, longitude: -101.682021 },
      { classType: 3, cwr: true, latitude: 35.2434099, longitude: -101.682021 },
      { classType: 4, cwr: true, latitude: 35.2434099, longitude: -101.682021 },
      { classType: 5, cwr: true, latitude: 35.2434099, longitude: -101.682021 },
    ]);
  }

  public getCameras(): Observable<number[]> {
    return of([1, 2, 3, 4, 5, 6]);
  }

  public getClassTypes(): Observable<number[]> {
    return of([1, 2, 3, 4, 5]);
  }
}