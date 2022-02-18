<template>
    <div class="hello">
        <comm-gnb></comm-gnb>
        <h1>{{ msg }}</h1>
        <comm-component></comm-component>
        <comm-footer></comm-footer>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { MockService, MockAPIMode } from "@god/mock-service";
import { sayHello } from "@god/type-utils";
import { HelloTypeClass } from "@god/type-utils";
import { CommComponent } from "@god/comm-components";
import { CommGnb, CommFooter } from "@god/comm-components";

export default defineComponent({
    components: {
        CommComponent,
        CommGnb,
        CommFooter
    },
    name: "HelloWorld",
    props: {
        msg: String,
    },
    created() {
        console.log("comm Component", CommComponent, CommGnb);
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
