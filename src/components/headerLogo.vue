<template>
  <div @click="handleLogoClick">
    <img class="logo" src="../assets/imgs/logo.png" alt="Logo" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "HeaderLogo",
  methods: {
    handleLogoClick() {
      this.$router.push("/");
    },
  },
});
</script>

<style>
.logo {
  width: 70%;
}

.logo:hover {
  cursor: pointer;
}
</style>
