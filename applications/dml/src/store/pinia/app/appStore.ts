import { defineStore } from "pinia";
import { AppConfig, AppState } from "./appStore-types";

export const useAppStore = defineStore({
  id: "app",

  state: (): AppState => ({
    appConfig: { isHttpCache: true } as AppConfig,
  }),

  actions: {},
  getters: {},
});
