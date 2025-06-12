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
import GamesView from "../views/GamesView.vue";
import SearchView from "../views/SearchView.vue";
import SubmitTipLineup from "../views/SubmitTipLineup.vue";
import SubmitView from "../views/SubmitView.vue";
import Contact from "../Footer/Contact.vue";
import Terms from "../Footer/Terms.vue";
import Privacy from "../Footer/Privacy.vue";

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
  {
    path: "/games",
    name: "Games",
    component: GamesView,
  },
  {
    path: "/search",
    name: "Search",
    component: SearchView,
  }, 
  {
    path: "/submit",
    name: "SubmitTipLineup",
    component: SubmitTipLineup,
  },
  {
    path: "/submit",
    name: "Submit",
    component: SubmitView,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/terms",
    name: "Terms",
    component: Terms,
  },
  {
    path: "/privacy",
    name: "Privacy",
    component: Privacy,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
