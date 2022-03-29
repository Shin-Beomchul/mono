import { defineStore } from "pinia";
import { AppState } from "./appStore-types";
import { getters } from "./getters";

export const useAppStore = defineStore({
  id: "app",
  state: (): AppState => ({
    appConfig: { isHttpCache: true, locale: "ko_KR", lang: "ko" },
  }),

  actions: {},
  getters: getters,
});
