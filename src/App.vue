<template>
  <div id="app">
    <div class="full-page">
      <header-menu />
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu.vue";
export default Vue.extend({
  name: "App",
  components: { HeaderMenu },
});
</script>

<style scoped>
#app {
  font-family: "Dosis", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow: hidden;

  color: rgba(255, 255, 255, 0.63);
  min-height: 100dvh;
  background: linear-gradient(
    301deg,
    rgba(22, 22, 22, 1) 23%,
    rgba(20, 17, 17, 1) 67%,
    rgba(0, 0, 0, 1) 100%
  );
}

.header {
  grid-column: 1 / 5;
  grid-row: 1;
}
.side-bar {
  grid-column: 1;
  grid-row: 2;
  display: flex;
  justify-content: flex-start;
}
</style>
