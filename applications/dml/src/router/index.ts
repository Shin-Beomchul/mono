import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { CommSearch } from "@god/comm-search";
import { MembersLogin } from "@god/comm-components";
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
  {
    path: "/store",
    name: "store",
    component: import(/* webpackChunkName: "product" */ "@/views/Store.vue"),
  },
  {
    path: "/composable",
    name: "composable",
    component: import(
      /* webpackChunkName: "product" */ "@/views/Composable.vue"
    ),
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
