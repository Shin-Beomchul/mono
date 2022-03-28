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

    <button @click="productStore.fetchProducts()">
      fetch(size : {{ listSizeOfCompositionAPI }})
    </button>
  </div>
</template>

<script lang="ts">
/**
 * @author Shin-BeomChul
 * @description pinia Store Example
 */
import { computed, defineComponent } from "vue";
import { useProductStore } from "@/store/pinia/product/productStore";
import { mapState } from "pinia";
import { ProductState } from "@/store/pinia/product/productStore-types";
export default defineComponent({
  components: {},
  name: "Home",
  props: {
    msg: String,
  },
  /** setup 훅에서 async 금지 */
  setup() {
    const productStore = useProductStore();
    const listSizeOfCompositionAPI = computed(() => productStore.list.length);
    return {
      productStore,
      listSizeOfCompositionAPI,
    };
  },

  computed: {
    /** optionAPI with pinia */
    ...mapState(useProductStore, ["list"]), // 스토어 getters의 list 함수 가져옴.
    ...mapState(useProductStore, {
      listOfActionAPI: "list", // 스토어 getters list 가져와 listOfActionAPI로 이름 변경
      doubleListSizeOfActionAPI: (store: ProductState) =>
        store.products.length * 2, // 스토어 데이터에 접근해 products를 가져옴.
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
