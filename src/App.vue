<template>
  <div id="app">
    <header-logo />
    <div class="pages">
      <side-menu />
      <about-page />
      <!-- <contact-page /> -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import aboutPage from "./components/aboutPage.vue";
import headerLogo from "./components/headerLogo.vue";
import sideMenu from "./components/sideMenu.vue";
export default Vue.extend({
  name: "App",
  components: {
    headerLogo,
    sideMenu,
    // contactPage,
    aboutPage,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
