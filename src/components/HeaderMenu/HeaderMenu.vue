<template>
  <div class="header-wrapper">
    <h1 class="title">OPHIR LEIBOVITCH</h1>
    <navigation-categories />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import NavigationCategories from "./NavigationCategories.vue";
export default Vue.extend({
  components: { NavigationCategories },
  name: "HeaderMenu",
});
</script>

<style scoped>
.header-wrapper {
  display: flex;
  padding-inline: 4rem;
  margin-block: 1rem;
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
