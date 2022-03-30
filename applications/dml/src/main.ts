import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store/vuex"; //@deprecated @See pinia
import { createPinia } from "pinia";
import { setupI18n } from "@/i18n/i18n";
import koMessages from "@/i18n/locales/ko.json";
import koMessagesOfComm from "@god/comm-search/lib/ko.json";
import { PiniaLogger } from "pinia-logger";
/** i18n */
const i18n = setupI18n({
  globalInjection: true,
  legacy: false,
  locale: process.env.VUE_APP_I18N_LOCALE,
  fallbackLocale: process.env.VUE_APP_I18N_LOCALE,
  messages: {
    ko: { ...koMessages, ...koMessagesOfComm }, // Default language only, other languages is lazy loading.
  },
});
/** pinia */
const pinia = createPinia();
pinia.use(
  PiniaLogger({
    expanded: true,
    disabled: process.env.VUE_APP_MODE === "production",
  })
);

/* prettier-ignore */
createApp(App)
  .use(i18n)
  .use(pinia)
  .use(store) //@deprecated
  .use(router)
  .mount("#app");
export { i18n };
