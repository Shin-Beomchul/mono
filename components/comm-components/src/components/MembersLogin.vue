<template>
  <div id="loginContainer">
    <div>
      <input
        v-model="emailLogin"
        type="email"
        class="form-control"
        placeholder="Email"
        required
      />
    </div>
    <div>
      <input
        v-model="passwordLogin"
        type="password"
        class="form-control"
        placeholder="Password"
        required
      />
    </div>
    <button @click="onLogin">Login</button>
    <div>{{ jwtToken }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import jwtDecode from "jwt-decode";
import { JwtToken } from "../types/JwtToken";
import { VueCookieNext } from "vue-cookie-next";
/**
 * @author Shin-BeomChul
 * @description Login
 * @emits
 *  onLoginSuccess(jwtToken: JwtToken)
 */
export default defineComponent({
  name: "MembersLogin",
  props: {
    msg: String,
  },
  data() {
    return {
      emailLogin: "" as string,
      passwordLogin: "" as string,
      jwtToken: {} as JwtToken,
    };
  },
  created() {
    console.log("hello");
  },
  methods: {
    onLogin() {
      //call login api

      // Parse JWT
      let token =
        "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZWlkIjozMywicGFzc3dvcmRNb2RpZmllZERhdGUiOiIyMDIxLTAyLTAxVDA2OjMzOjI5WiIsImN1aWQiOiI1NTMyMzgiLCJ1c2VyX25hbWUiOiJzYmMwODMwbWVtYmVycyIsImVtaWQiOm51bGwsImF1dGhvcml0aWVzIjpbIlJPTEVfRURVQ0FUSU9OIiwiUk9MRV9IT01FUEFHRSIsIlJPTEVfSk9CIiwiUk9MRV9NQUxMIiwiUk9MRV9VU0VSIiwiUk9MRV9WT0QiLCJST0xFX1NPRlRXQVJFIiwiUk9MRV9ERU5USVNUIl0sImNsaWVudF9pZCI6ImlkcC13ZWJhcHAiLCJzY29wZSI6WyJvcGVuaWQiXSwib3JnYW5pemF0aW9uIjoib3JnYW5pemF0aW9uIiwibmFtZSI6IuyLoOuylOyyoCIsInNmaWQiOm51bGwsImV4cCI6MTYxNTIyNzUwNCwianRpIjoiYTEzYTQ3NzctZTUwZi00ZTM2LWI0ZDAtNzlhY2UwNDM5MDY1In0.e2uGlob0PJNtUamw_J1PTD3OOQSYjhaEfOgETnU4Vzw8YIFBU6hVwD1W-iOll2OEEj5Z5b4vWN4NqWcnHghJG8lkVPlIPcats9v4RqQrbqBwoofYGeqppOI82oyA30xuH4EXh-J-YLZqImAAcOVqDq6KTw76gd0f5PJl9nrxGjWPoXKfl9mhNRlksabCjWRqkVdqTB62QYxUIV1PaL76rBVH-OX6gc9mEFcUP-j9-5Zyq02qZPUXAicfgIZVMz06UZ7m4_dI4JuK38BN-6ZZsJHMTW-09IerFi2bWvsgOACrSYZrqZKguRgBzUeLi35VME32y5N4ljLqLTsGBhcuRw";
      const decodedToken: JwtToken = jwtDecode<JwtToken>(token);
      decodedToken.token = token;
      VueCookieNext.config({ domain: ".god.com" }); // 서브도메인이 다를때 쿠키값 공유
      VueCookieNext.setCookie("Authentication", token);
      console.log(
        "Login Success Token => ",
        VueCookieNext.getCookie("Authentication")
      );

      // callback Login Success
      this.$emit("onLoginSuccess", decodedToken);
      this.jwtToken = decodedToken;
    },
  },
});
</script>

<style scoped lang="scss">
.error {
  animation-name: errorShake;
  animation-duration: 0.3s;
}

@keyframes errorShake {
  0% {
    transform: translateX(-25px);
  }
  25% {
    transform: translateX(25px);
  }
  50% {
    transform: translateX(-25px);
  }
  75% {
    transform: translateX(25px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
