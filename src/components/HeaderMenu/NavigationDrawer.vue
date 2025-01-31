<template>
  <div>
    <v-navigation-drawer
      v-model="isDrawerOpen"
      absolute
      left
      temporary
      dark
      class="drawer"
    >
      <navigation-categories />
    </v-navigation-drawer>
    <v-btn icon @click="isDrawerOpen = !isDrawerOpen">
      <img src="../../assets/icons/menu.svg" />
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import NavigationCategories from "./NavigationCategories.vue";

export default Vue.extend({
  name: "NavigationDrawer",
  components: { NavigationCategories },
  data() {
    return {
      isDrawerOpen: false,
    };
  },
});
</script>

<style scoped>
.drawer {
  background-color: #111010;
}
</style>
