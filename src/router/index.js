// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../components/HomeView.vue";
import LoginView from "../components/LoginView.vue";
import ForgotpasswordView from "../components/ForgotPasswordView.vue";
import RegisterView from "../components/RegisterView.vue";
import AccountView from "../components/AccountView.vue";
import RocketLeague from "../views/RocketLeague.vue";
import LethalCompany from "../views/LethalCompany.vue";
import Repo from "../views/Repo.vue";
import Valorant from "../views/Valorant.vue";

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
