import VueRouter, { RouteConfig } from "vue-router";
import HomePage from "../views/HomePage.vue";
import AboutPage from "../views/AboutPage.vue";
import ContactPage from "../views/ContactPage.vue";
import WorksPage from "../views/WorksPage.vue";

const routes: RouteConfig[] = [
  { path: "/", component: HomePage },
  { path: "/about", component: AboutPage },
  { path: "/contact", component: ContactPage },
  { path: "/works", component: WorksPage },
];

const router = new VueRouter({ routes, mode: "history" });

export default router;
