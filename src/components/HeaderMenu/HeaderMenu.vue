<template>
  <div class="header-wrapper">
    <h1 class="title" @click="navigateToHome">OPHIR LEIBOVITCH</h1>
    <navigation-categories v-if="!isPhoneView" />
    <navigation-drawer v-else />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import NavigationCategories from "./NavigationCategories.vue";
import NavigationDrawer from "./NavigationDrawer.vue";
export default Vue.extend({
  components: { NavigationCategories, NavigationDrawer },
  name: "HeaderMenu",
  methods: {
    navigateToHome() {
      this.$router.push({ name: "HomePage" });
    },
  },

  computed: {
    isPhoneView() {
      return window.innerWidth <= 768;
    },
  },
});
</script>

<style scoped>
.header-wrapper {
  display: flex;
  padding-inline: 4rem;
  margin-block: 1rem;
}

@media screen and (max-width: 768px) {
  .header-wrapper {
    align-items: center;
    padding-inline: 2rem;
  }
}

.title {
  color: #f5f5f5;
  text-align: left;
  flex-grow: 1;
  letter-spacing: 2px;
  font-family: Dosis;
  font-weight: 400;
  font-style: normal;
  font-size: 18px;
  letter-spacing: 2px;
  line-height: 1em;
  text-transform: uppercase;
}

.title:hover {
  cursor: pointer;
}
</style>
