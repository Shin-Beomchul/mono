<template>
    <div>
        <g-btn></g-btn>
        <div id="comm-footer">Comm Footer</div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GBtn from "./GBtn.vue";
export default defineComponent({
    name: "CommFooter",
    components: {
        GBtn
    }
});
</script>

<style scoped lang="scss">
#comm-footer {
 background: #b94248;
}

</style>
