// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../components/HomeView.vue";
import LoginView from "../components/LoginView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
