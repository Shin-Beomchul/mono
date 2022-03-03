<template>
    <div class="hello">
        <comm-gnb
            @onClickLogin="onClickLogin"
            @onClickLoginCommSearch="onClickLoginCommSearch"/>
        <h1>Welcome to DML Home</h1>
        <comm-footer></comm-footer>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { MockService, MockAPIMode } from "@god/mock-service";
import { sayHello } from "@god/type-utils";
import { HelloTypeClass } from "@god/type-utils";
import { CommGnb, CommFooter } from "@god/comm-components"; /* @god/@comm-components */
// import { MembersLogin } from "@god/comm-components";
import router from "@/router";
export default defineComponent({
    components: {
        CommGnb,
        CommFooter,
        // MembersLogin
    },
    name: "Home",
    props: {
        msg: String,
    },
    data() {
        return {
            showLogin: false,
        };
    },
    created() {
        console.log("commGnb", CommGnb);
        // console.log("CommSearch", CommSearch);
        /* @@god/type-utils*/
        sayHello(); // function
        let heloTypeClass = new HelloTypeClass(); // Class
        console.log(heloTypeClass.getName());

        // @god/mock-service
        let mockService = new MockService();
        mockService.getMockAxiosResponse(MockAPIMode.FAST)
            .then((r) => console.log("use MockService", r));
    },
    methods: {
        onClickLogin() {
            console.log("onClickLogin");
            router.push("/login");
        },
        onClickLoginCommSearch() {
            console.log("onClickLoginCommSearch");
            router.push("/comm-search");
        }
    }
});
</script>

<style scoped lang="scss">
</style>
