export interface IFileTemplateConfig {
    files: File[];
    title: string;
    messageSeverity: "info" | "success" | "warn" | "error";
  }