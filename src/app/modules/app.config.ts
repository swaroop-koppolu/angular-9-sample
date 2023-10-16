import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IAppConfig } from "@shared/interfaces/app-config.interface";

@Injectable()
export class AppConfig {
  static settings: IAppConfig;
  constructor(private http: HttpClient) { }
  load() {
    const jsonFile = "assets/config/app-config.json";
    return new Promise<void>((resolve, reject) => {
      this.http.get(jsonFile).toPromise().then((response: IAppConfig) => {
        AppConfig.settings = response as IAppConfig;
        resolve();
      }).catch((response: Error) => {
        console.log(`Could not load file '${jsonFile}': ${JSON.stringify(response)}`);
        reject(response);
      });
    });
  }
}