import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "loginPage",
      component: () => import("../components/Login.vue"),
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../components/Home.vue"),
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
