import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
//import { IImageTrainingAPIEndpoints } from "@shared/interfaces/app-config.interface";
import { HttpClient } from "@angular/common/http";
//import { AppConfig } from "@appConfig";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private imageTrainingApiBaseUrl: string;
  //private imageTrainingApiEndpoints: IImageTrainingAPIEndpoints;
  private imageTrainingApiEndpoints: string;
  constructor(private http: HttpClient) {
    // this.imageTrainingApiBaseUrl = AppConfig.settings.imageTrainingApi.baseUrl;
    // this.imageTrainingApiEndpoints = AppConfig.settings.imageTrainingApi.endPoints;
    this.imageTrainingApiBaseUrl = "AppConfig.settings.imageTrainingApi.baseUrl";
    this.imageTrainingApiEndpoints = "AppConfig.settings.imageTrainingApi.endPoints";
  }

  uploadForImageTraining(file: File): Observable<File> {
    const url = `${this.imageTrainingApiBaseUrl}${this.imageTrainingApiEndpoints}`;
   // const url = `${this.imageTrainingApiBaseUrl}${this.imageTrainingApiEndpoints.uploadToImageTraining}`;
    const data = new FormData();
    data.append("Image", file, file.name);
    return this.http.post<any>(url, data
      //   , {
      //   reportProgress: true,
      //   observe: "events"
      // }
    );
  }
}
