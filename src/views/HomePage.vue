<template>
  <div class="home-page">
    <img
      class="home-page-image"
      src="../assets/imgs/home-page.jpg"
      alt="HomePage Image"
    />
    <p>
      Image from "Counterlight" exhibition by Maya Zack, music by Ophir
      Leibovitch, Tel-Aviv Museum of Art, 2016
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HomePage",
});
</script>

<style scoped>
.home-page {
  padding: 1rem;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
}
.home-page-image {
  display: block;
  object-fit: contain;
  min-height: 75vh;
  max-width: 90vw;
  margin: auto;
}
</style>
