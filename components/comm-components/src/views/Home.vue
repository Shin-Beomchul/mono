<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <members-login></members-login>
  </div>
</template>

<script lang="ts">
  import {defineComponent} from 'vue';
  import MembersLogin from '@/components/MembersLogin.vue';

  export default defineComponent({
    name: 'Home',
    components: {
      MembersLogin,
    },
  });
</script>
