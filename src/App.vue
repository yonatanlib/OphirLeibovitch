<template>
  <div id="app">
    <header-logo />
    <div class="pages">
      <side-menu />
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HeaderLogo from "./components/HeaderLogo.vue";
import SideMenu from "./components/SideMenu.vue";
export default Vue.extend({
  name: "App",
  components: {
    HeaderLogo,
    SideMenu,
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
