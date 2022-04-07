<template>
  <div id="nav">
    <!-- GNB -->
    <comm-gnb
      @onClickLogin="onClickLogin"
      @onClickLoginCommSearch="onClickLoginCommSearch"
      @onChangeLang="onChangeLang"
      @onClickHome="onClickHome"
    >
    </comm-gnb>
  </div>
  <!-- content -->
  <router-view id="content" />

  <!-- Footer -->
  <comm-footer id="footer" @onFooterItemClick="onFooterItemClick"> </comm-footer>
</template>
<script lang="ts">
/**
 * @author Shin-BeomChul
 * @description monoRepository Dependency Example
 */
import { loadLocaleMessages, setI18nLanguage } from "@/i18n/i18n";
import { SearchButton, CommSearch } from "@god/comm-search";
import { defineComponent } from "vue";
import { CommGnb, CommFooter, JwtToken } from "@god/comm-components";
import { MockService, MockAPIMode } from "@god/mock-service";
import { sayHello } from "@god/type-utils";
import { HelloTypeClass } from "@god/type-utils";
import { PersistentLruCache, PresitentType } from "@god/lru-cache";
import { useI18n } from "vue-i18n";
import router from "@/router";
import { i18n } from "@/main";
import { useAppStore } from "./store/pinia/app/appStore";

export default defineComponent({
  components: {
    CommGnb,
    CommFooter,
  },
  name: "Home",
  props: {
    msg: String,
  },
  data() {
    return {
      isExampleLog: false,
      jwtToken: {} as JwtToken, //JwtToken Interface
    };
  },
  setup() {
    return {};
  },
  created() {
    if (this.isExampleLog) {
      console.log("useI18n welcome Message", useI18n().t("welcome"));
      console.log("SearchButton", SearchButton);
      console.log("CommSearch", CommSearch);
      /* @god/lru-cache*/
      let persistentLruCache = new PersistentLruCache(PresitentType.Local, {
        max: 30,
      });
      persistentLruCache.setStorage("key", "hello");
      console.log("persistentLruCache [exist Key]", persistentLruCache.isHit("key")); // hit : true
      console.log("persistentLruCache [Not exist Key]", persistentLruCache.isHit("ghost")); // miss : false

      /* @god/type-utils*/
      sayHello(); // function
      let heloTypeClass = new HelloTypeClass(); // Class
      console.log(heloTypeClass.getName());

      // @god/mock-service
      let mockService = new MockService();
      mockService.getMockAxiosResponse(MockAPIMode.FAST).then((r) => console.log("use MockService", r));
    }
  },
  methods: {
    /** 로그인 클릭 시 */
    onClickLogin() {
      console.log("onClickLogin");
      router.push("/login");
    },
    /** 언어변경 */
    async onChangeLang(lang: string) {
      await loadLocaleMessages(i18n, lang);
      setI18nLanguage(i18n, lang);
      useAppStore().appConfig.lang = lang;
    },
    /** 홈으로 가기 클릭 */
    onClickHome() {
      console.log("onClickLogin");
      router.push("/");
    },

    /**통합검색 클릭 시 */
    async onClickLoginCommSearch() {
      console.log("onClickLoginCommSearch");
      router.push("/comm-search");
    },
    onFooterItemClick($event, itemKey: string) {
      alert(itemKey);
      console.log("onFooterItemClick itemKey", itemKey);
    },
  },
});
</script>

<style lang="scss">
@import "@/assets/styles/_global.scss";
</style>
