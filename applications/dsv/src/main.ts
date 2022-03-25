import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { setupI18n } from "@/i18n/i18n";
import koMessages from "@/i18n/locales/ko.json";
import enMessages from "@/i18n/locales/en.json";
const i18n = setupI18n({
  globalInjection: true,
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages: {
    ko: koMessages,
    en: enMessages,
  },
});

export { i18n };
/* prettier-ignore */
createApp(App)
  .use(i18n)
  .use(store)
  .use(router)
  .mount("#app");
