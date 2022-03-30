<template>
  <div>
    <div id="content"></div>
    <h3>productStore.list(CompositionAPI)</h3>
    <div>{{ productStore.list }}</div>

    <h3>list(optionAPI)</h3>
    <div>{{ list }}</div>

    <h3>listOfActionAPI</h3>
    <div>{{ listOfActionAPI }}</div>

    <h3>doubleListSizeOfActionAPI</h3>
    <div>{{ doubleListSizeOfActionAPI }}</div>

    <button @click="productStore.fetchProducts()">fetch(size : {{ listSizeOfCompositionAPI }})</button>

    <h3>useDebounceFn</h3>
    <p>Event handler : {{ updated }}</p>
    <button @click="debouncedAPI($event, 'apiKey')">debouncedAPI</button>
    <button @click="consecutiveGuardAPI($event, 'apiKey')">consecutiveGuardAPI</button>
    <!-- <input :value="updated" @input="debouncedFn" placeholder="input" />
    <input disabled placeholder="output" :value="updated" /> -->
    <!-- <small>Delay is set to 1000ms.</small> -->
  </div>
</template>

<script lang="ts">
/**
 * @author Shin-BeomChul
 * @description pinia Store Example
 */
import { computed, defineComponent, ref } from "vue";
import { useProductStore } from "@/store/pinia/product/productStore";
import { mapState } from "pinia";
import { ProductState } from "@/store/pinia/product/productStore-types";
import { useDebounceFn, useConsecutiveGuard } from "@god/comm-components";
import { MockService } from "@god/mock-service/lib";
export default defineComponent({
  components: {},
  name: "Home",
  props: {
    msg: String,
  },
  /** setup 훅에서 async 금지 */
  setup() {
    /** pinia By compositionAPI */
    const productStore = useProductStore();
    const listSizeOfCompositionAPI = computed(() => productStore.list.length);

    /** composable Example */
    const updated = ref("");
    const apiFunction = (event, param) => {
      new MockService().fakeHttpLatencyMock().then((apiResponse) => {
        updated.value = apiResponse.data + new Date().getSeconds();
      });
    };
    // consecutiveGuard
    const consecutiveGuardAPI = useConsecutiveGuard(1000, apiFunction, (state) => {
      console.log(state);
    });
    // useDebounceFn
    const debouncedAPI = useDebounceFn({ delay: 1000, immediate: true }, apiFunction);
    return {
      productStore,
      listSizeOfCompositionAPI,
      updated,
      debouncedAPI,
      consecutiveGuardAPI,
    };
  },

  computed: {
    /** pinia By optionAPI */
    ...mapState(useProductStore, ["list"]), // 스토어 getters의 list 함수 가져옴.
    ...mapState(useProductStore, {
      listOfActionAPI: "list", // 스토어 getters list 가져와 listOfActionAPI로 이름 변경
      doubleListSizeOfActionAPI: (store: ProductState) => store.products.length * 2, // 스토어 데이터에 접근해 products를 가져옴.
    }),
  },

  data() {
    return {
      homeMessage: "Store",
    };
  },
  methods: {},
});
</script>

<style scoped lang="scss"></style>
