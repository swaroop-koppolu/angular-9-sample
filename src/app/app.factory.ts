import { ApplicationInsights, Snippet } from "@microsoft/applicationinsights-web";
import { IAppConfig } from "@shared/interfaces/app-config.interface";
import { AppConfig } from "@appConfig";
import { Configuration } from "msal";
import { MsalModule, MsalInterceptor, MSAL_CONFIG, MSAL_CONFIG_ANGULAR, MsalService, MsalAngularConfiguration } from "@azure/msal-angular";

let msalConfig: Configuration; // will be initialized by APP_INITIALIZER
let appInsights: ApplicationInsights; // will be initialized by APP_INITIALIZER

export function msalConfigFactory(): Configuration {
  return msalConfig;
}

export function appInsightsFactory(): ApplicationInsights {
  return appInsights; // will be invoked later when creating MsAdalAngular6Service
}


export const protectedResourceMap: [string, string[]][] = [
  ["https://graph.microsoft.com/beta/me", ["user.read"]]
];

const isIE = window.navigator.userAgent.indexOf("MSIE ") > -1 || window.navigator.userAgent.indexOf("Trident/") > -1;
const isPopUp = !isIE && (location.pathname === "/" || location.pathname === "/home");

export function msalAngularConfigFactory(): MsalAngularConfiguration {
  return {
    popUp: false,
    consentScopes: [
      "user.read",
      "User.ReadBasic.All",
      "openid",
      "profile",
      "Device.Read",
    ],
    unprotectedResources: ["https://www.microsoft.com/en-us/"],
    protectedResourceMap,
    extraQueryParameters: {}
  };
}

export function initializeApp(appConfigObj: AppConfig): () => Promise<void> {
  const promise = appConfigObj.load().then(() => {
    msalConfig = {
      framework: {
        isAngular: true
      },
      system: {
        // loadFrameTimeout: 60
      },
      auth: {
        clientId: AppConfig.settings.adalConfig.clientId,
        authority: `https://login.microsoftonline.com/${ AppConfig.settings.adalConfig.tenant }/`,
        validateAuthority: true,
        redirectUri: window.location.origin,
        postLogoutRedirectUri: "http://localhost:4200/",
        navigateToLoginRequestUrl: true,
      },
      cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: isIE, // set to true for IE 11
      },
    };
    appInsights = new ApplicationInsights({
      config: {
        instrumentationKey: AppConfig.settings.appInsights.instrumentationKey,
        enableAutoRouteTracking: AppConfig.settings.appInsights.enableAutoRouteTracking
      }
    } as Snippet);
    appInsights.loadAppInsights();
    appInsights.trackPageView();
  });
  return () => promise;
}