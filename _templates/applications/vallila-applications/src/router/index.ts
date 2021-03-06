import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import { CommSearch } from "@god/comm-search"; /* @@god/comm-search */
import { MembersLogin } from "@god/comm-components";
const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/comm-search",
        name: "comm-search",
        component: () =>
            CommSearch,
    },
    {
        path: "/login",
        name: "login",
        component: () =>
            MembersLogin,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
