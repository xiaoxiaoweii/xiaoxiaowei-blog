import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import about from "../components/About.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: "/home",
    name: "HelloWorld",
    component: () =>
      import(/* webpackChunkName: "About" */ "../components/HelloWorld.vue")
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;