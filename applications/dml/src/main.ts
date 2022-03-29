import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store/vuex"; //@deprecated @See pinia
import { createPinia } from "pinia";
import { setupI18n } from "@/i18n/i18n";
import koMessages from "@/i18n/locales/ko.json";
import enMessages from "@/i18n/locales/en.json";
import koMessagesOfComm from "@god/comm-search/lib/ko.json";
import enMessagesOfComm from "@god/comm-search/lib/en.json";
const i18n = setupI18n({
  globalInjection: true,
  legacy: false,
  locale: "ko",
  fallbackLocale: "ko",
  messages: {
    ko: { ...koMessages, ...koMessagesOfComm },
    en: { ...enMessages, ...enMessagesOfComm },
  },
});
/* prettier-ignore */
createApp(App)
  .use(i18n)
  .use(store) //@deprecated
  .use(createPinia())
  .use(router)
  .mount("#app");
export { i18n };
