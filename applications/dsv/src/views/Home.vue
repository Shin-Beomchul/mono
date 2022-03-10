<template>
  <div class="hello">
    <comm-gnb @onClickLogin="onClickLogin" @onClickLoginCommSearch="onClickLoginCommSearch"> </comm-gnb>
    <div id="content"><h1>Welcome to DSV Home</h1></div>
    <comm-footer @onFooterItemClick="onFooterItemClick"> </comm-footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { CommGnb, CommFooter } from "@god/comm-components";
import { MockService, MockAPIMode } from "@god/mock-service";
import { sayHello } from "@god/type-utils";
import { HelloTypeClass } from "@god/type-utils";
import { PersistentLruCache, PresitentType } from "@god/lru-cache";
import router from "@/router";
export default defineComponent({
  components: {
    CommGnb,
    CommFooter
  },
  name: "Home",
  props: {
    msg: String
  },
  data() {
    return {};
  },
  created() {
    /* @god/lru-cache*/
    let persistentLruCache = new PersistentLruCache(PresitentType.Local, { max: 30 });
    persistentLruCache.setStorage("key", "hello");
    console.log("persistentLruCache [exist Key]", persistentLruCache.isHit("key"));
    console.log("persistentLruCache [Not exist Key]", persistentLruCache.isHit("ghost"));

    /* @god/type-utils*/
    sayHello(); // function
    let heloTypeClass = new HelloTypeClass(); // Class
    console.log(heloTypeClass.getName());

    // @god/mock-service
    let mockService = new MockService();
    mockService.getMockAxiosResponse(MockAPIMode.FAST).then(r => console.log("use MockService", r));
  },
  methods: {
    onClickLogin() {
      console.log("onClickLogin");
      router.push("/login");
    },
    onClickLoginCommSearch() {
      console.log("onClickLoginCommSearch");
      router.push("/comm-search");
    },
    onFooterItemClick($event, itemKey: string) {
      alert(itemKey);
      console.log("onFooterItemClick itemKey", itemKey);
    }
  }
});
</script>

<style scoped lang="scss">
#content {
  height: 650px;
}
</style>
