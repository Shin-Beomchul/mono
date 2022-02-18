<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <comm-component></comm-component>
        <comm-gnb></comm-gnb>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { MockService, MockAPIMode } from "@god/mock-service";
import { sayHello } from "@god/hello-type-lib";
import { HelloTypeClass } from "@god/hello-type-lib";
import { CommComponent } from "@god/valina-vue-components";
import { CommGnb } from "@god/valina-vue-components";

export default defineComponent({
    components: {
        CommComponent,
        CommGnb
    },
    name: "HelloWorld",
    props: {
        msg: String,
    },
    created() {
        console.log("??", CommComponent, CommGnb);
        /* @@god/hello-type-lib*/
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
