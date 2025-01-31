import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuetify from "vuetify";
import VueRouter from "vue-router";
import "vuetify/dist/vuetify.min.css";

Vue.config.productionTip = false;

Vue.use(Vuetify);
Vue.use(VueRouter);

const vuetify = new Vuetify();

new Vue({
  el: "#app",
  router,
  vuetify,
  render: (h) => h(App),
});
