import { defineStore } from "pinia";
import { AppConfig, AppState } from "./appStore-types";
import { getters } from "./getters";

export const useAppStore = defineStore({
  id: "app",
  state: (): AppState => ({
    appConfig: { isHttpCache: true } as AppConfig,
  }),

  actions: {},
  getters: getters,
});
