export interface Environment {
    name: "LOCAL" | "DEV" | "TEST" | "STAGE" | "PROD";
    hmr: boolean;
    production: boolean;
    appVersion: string;
  }