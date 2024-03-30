import VueRouter, { RouteConfig } from "vue-router";
import HomePage from "../views/HomePage.vue";
import AboutPage from "../views/AboutPage.vue";
import ContactPage from "../views/ContactPage.vue";

const routes: RouteConfig[] = [
  { path: "/", component: HomePage },
  { path: "/about", component: AboutPage },
  { path: "/contact", component: ContactPage },
  //   { path: "/works", component: AboutPage },
];

const router = new VueRouter({ routes, mode: "hash" });

export default router;
