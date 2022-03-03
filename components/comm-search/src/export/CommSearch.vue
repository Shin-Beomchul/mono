<template>
    <div id="comm-search-container">
        <h1>{{ msg }}</h1>
        <input/> <search-button></search-button>
        <div>공통 통합검색 페이지 컴포넌트</div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SearchButton from "../components/SearchButton.vue";

export default defineComponent({
    name: "CommSearch",
    props: {
        msg: String,
    },
    components: {
        SearchButton
    },
    created() {
        console.log("hello CommSearch");
    }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#comm-search-container{
    height: 100px;
    padding: 10px;
    background: #00ff00;
}
</style>
