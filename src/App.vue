<template>
  <div id="app">
    <header-logo />
    <div class="pages">
    <side-menu/>
    <!-- <about-page /> -->
    <contact-page/>
    </div>
  </div>
</template>

<script>
import ContactPage from './components/contactPage.vue';
import headerLogo from "./components/headerLogo.vue";
// import AboutPage from "./components/aboutPage.vue";
import SideMenu from './components/sideMenu.vue';
export default {
  name: "App",
  components: { headerLogo, SideMenu, ContactPage },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0 5rem;
}
body {
  margin: 0;
}
.pages {
  display: flex;
  margin-top:1rem;
}
</style>
