<template>
  <div id="app">
    <div class="full-page">
      <header-logo class="header" />
      <side-menu class="side-bar" />
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

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

.full-page {
  display: grid;
  grid-template-columns: 11.25rem 1fr;
  grid-template-rows: 100px 4fr;
}

.header {
  grid-column: 1 / 5;
  grid-row: 1;
  background-color: #f3f3f3;
}
.side-bar {
  grid-column: 1;
  grid-row: 2;
  display: flex;
  justify-content: flex-start;
}
</style>
