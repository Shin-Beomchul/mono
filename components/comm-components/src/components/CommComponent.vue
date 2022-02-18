<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <p>
            CommComponent
        </p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "CommComponent",
    props: {
        msg: String,
    },
    created() {
        console.log("hello");
    }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
