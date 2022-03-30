<template>
  <div>
    <div id="content"></div>
    <h3>useConsecutiveGuard</h3>

    <button @click="consecutiveGuardAPI($event, 'apiKey')">consecutiveGuardAPI</button>
    <h3>useDebounceFn</h3>

    <button @click="debouncedAPI($event, 'apiKey')">debouncedAPI</button>
    <p>Event handler : {{ updated }}</p>
  </div>
</template>

<script lang="ts">
/**
 * @author Shin-BeomChul
 * @description pinia Store Example
 */
import { defineComponent, ref } from "vue";
import { useDebounceFn, useConsecutiveGuard } from "@god/comm-components";
import { MockService } from "@god/mock-service/lib";
export default defineComponent({
  components: {},
  name: "Home",
  props: {
    msg: String,
  },
  setup() {
    /** composable Example */
    const updated = ref("");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const apiFunction = (event, param) => {
      new MockService().fakeHttpLatencyMock().then((apiResponse) => {
        console.log("callAPI");
        updated.value = apiResponse.data + new Date().getSeconds();
      });
    };
    // useConsecutiveGuard
    const consecutiveGuardAPI = useConsecutiveGuard(1000, apiFunction, (state) => {
      console.log(state);
    });
    // useDebounceFn
    const debouncedAPI = useDebounceFn({ delay: 1000, immediate: true }, apiFunction);
    return {
      updated,
      debouncedAPI,
      consecutiveGuardAPI,
    };
  },

  data() {
    return {
      homeMessage: "Composable",
    };
  },
  methods: {},
});
</script>

<style scoped lang="scss"></style>
