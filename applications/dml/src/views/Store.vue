<template>
  <div>
    <div id="content"></div>
  </div>
</template>

<script lang="ts">
/**
 * @author Shin-BeomChul
 * @description Store Example
 */
import { defineComponent } from "vue";
import { useCartStore } from "@/store/pinia/cart/cartStore";
import { useProductStore } from "@/store/pinia/product/productStore";
export default defineComponent({
  components: {},
  name: "Home",
  props: {
    msg: String,
  },
  setup(props, context) {
    const cartStore = useCartStore();
    const productStore = useProductStore();
    console.log("setup Store", cartStore, productStore);
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
