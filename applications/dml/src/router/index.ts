import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { CommSearch } from "@god/comm-search"; /* @@god/comm-search */
import { MembersLogin } from "@god/comm-components/src/exposes";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/comm-search",
    name: "comm-search",
    component: CommSearch,
  },
  {
    path: "/login",
    name: "login",
    component: MembersLogin,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
