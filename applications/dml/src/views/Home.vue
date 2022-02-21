<template>
    <div class="hello">
        <h1>Welcome to DML Home</h1>
        <comm-gnb></comm-gnb>
        <comm-search></comm-search>
        <comm-footer></comm-footer>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { MockService, MockAPIMode } from "@god/mock-service";
import { sayHello } from "@god/type-utils";
import { HelloTypeClass } from "@god/type-utils";
import { CommGnb, CommFooter } from "@god/comm-components";
import { CommSearch } from "@god/comm-search";

export default defineComponent({
    components: {
        CommGnb,
        CommFooter,
        CommSearch
    },
    name: "Home",
    props: {
        msg: String,
    },
    created() {
        console.log("commGnb", CommGnb);
        console.log("CommSearch", CommSearch);
        /* @@god/type-utils*/
        sayHello(); // function
        let heloTypeClass = new HelloTypeClass(); // Class
        console.log(heloTypeClass.getName());

        // @god/mock-service
        let mockService = new MockService();
        mockService.getMockAxiosResponse(MockAPIMode.FAST)
            .then((r) => console.log("use MockService", r));
    }
});
</script>

<style scoped lang="scss">
</style>
