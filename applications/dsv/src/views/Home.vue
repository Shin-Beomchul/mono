<template>
  <div class="hello">
    <div id="content">
      <h1>{{ $t("welcome") }}</h1>
    </div>
  </div>
</template>

<script lang="ts">
/**
 * @author Shin-BeomChul
 * @description monoRepository Dependency Example
 */
import { defineComponent } from "vue";
export default defineComponent({
  components: {},
  name: "Home",
  props: {
    msg: String,
  },
  data() {
    return {
      homeMessage: "Home SweetHome",
    };
  },
  created() {
    console.log("create");
  },
  methods: {},
});
</script>

<style scoped lang="scss"></style>
