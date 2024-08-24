<template>
  <div></div>
</template>

<script lang="ts">
import Vue from "vue";
import { getWorksImages } from "@/DL/worksPageDL";
export default Vue.extend({
  name: "WorksPage",
  created() {
    getWorksImages();
  },
});
</script>

<style scoped></style>
