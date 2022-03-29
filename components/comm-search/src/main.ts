import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { setupI18n } from "./i18n/i18n";
import koCommMessages from "@/i18n/locales/ko.json";
// import enCommMessages from "@/i18n/locales/en.json";
const i18n = setupI18n({
  globalInjection: true,
  legacy: false,
  locale: "ko",
  fallbackLocale: "ko",
  messages: {
    ko: koCommMessages,
    // en: enCommMessages,
  },
});
/* prettier-ignore */
createApp(App)
  .use(i18n)
  .use(store)
  .use(router)
  .mount("#app");
export { i18n };
