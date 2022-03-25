<template>
  <div class="home">
    <comm-gnb></comm-gnb>
    <img alt="Vue logo" src="../assets/logo.png" />
    <members-login></members-login>
    <comm-footer></comm-footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CommGnb from "@/components/layout/CommGnb.vue";
import CommFooter from "@/components/layout/CommFooter.vue";
import MembersLogin from "@/components/MembersLogin.vue";

export default defineComponent({
  name: "Home",
  components: {
    CommGnb,
    MembersLogin,
    CommFooter,
  },
});
</script>
