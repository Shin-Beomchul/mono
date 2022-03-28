import { AppState } from "./appStore-types";

const getters = {
  cacheState(state: AppState) {
    return state.appConfig.isHttpCache;
  },
};
export { getters };
