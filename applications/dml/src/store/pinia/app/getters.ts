import { AppState } from "./appStore-types";

const getters = {
  cacheState(state: AppState): boolean {
    return state.appConfig.isHttpCache;
  },
};
export { getters };
