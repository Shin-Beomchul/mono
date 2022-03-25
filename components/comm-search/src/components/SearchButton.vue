<template>
  <span>
    <button id="btn-search">검색</button>
  </span>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "SearchButton",
});
</script>
<style scoped lang="scss">
@import "@/assets/styles/_search.scss";
</style>
