export interface AppConfig {
  isHttpCache: boolean;
  locale: string;
  lang: string;
}

export interface AppState {
  appConfig: AppConfig;
}
