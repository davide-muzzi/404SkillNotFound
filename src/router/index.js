// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import ForgotpasswordView from "../views/ForgotPasswordView.vue";
import RegisterView from "../views/RegisterView.vue";
import AccountView from "../views/AccountView.vue";
import RocketLeague from "../games/RocketLeague.vue";
import LethalCompany from "../games/LethalCompany.vue";
import Repo from "../games/Repo.vue";
import Valorant from "../games/Valorant.vue";
import AboutView from "../views/AboutView.vue";

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
  {
    path: "/forgotpassword",
    name: "Forgotpassword",
    component: ForgotpasswordView,
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterView,
  },
  {
    path: "/account",
    name: "Account",
    component: AccountView,
  },
  {
    path: "/rocketleague",
    name: "RocketLeague",
    component: RocketLeague,
  },
  {
    path: "/lethalcompany",
    name: "LethalCompany",
    component: LethalCompany,
  },
  {
    path: "/repo",
    name: "Repo",
    component: Repo,
  },
  {
    path: "/valorant",
    name: "valorant",
    component: Valorant,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
