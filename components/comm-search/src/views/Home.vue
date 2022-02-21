<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <CommComponent msg="Welcome to 공통 컴포넌트 모듈 (comm-components)" />
        <comm-footer></comm-footer>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CommComponent from "@/components/CommComponent.vue"; // @ is an alias to /src
import CommFooter from "@/components/layout/CommFooter.vue";

export default defineComponent({
    name: "Home",
    components: {
        CommComponent,
        CommFooter
    },
});
</script>
