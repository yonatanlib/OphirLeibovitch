<template>
  <div v-if="showImages" class="images-container">
    <img v-for="imgUrl in worksImages" :key="imgUrl" :src="imgUrl" />
  </div>
  <div v-else>Error</div>
</template>

<script lang="ts">
import Vue from "vue";
import { getWorksImages } from "@/DL/worksPageDL";
export default Vue.extend({
  name: "WorksPage",
  data() {
    return {
      worksImages: [] as string[],
    };
  },
  async created() {
    this.worksImages = await getWorksImages();
  },
  computed: {
    showImages() {
      return !!this.worksImages.length;
    },
  },
});
</script>

<style scoped>
.images-container {
  padding: 1rem;
  display: grid;
  gap: 1rem; /* Space between images */
  grid-template-columns: repeat(
    auto-fill,
    minmax(300px, 2fr)
  ); /* Adjusts columns based on container size */
  justify-items: center; /* Center images horizontally */
}

.images-container img {
  width: 100%;
  height: auto;
  object-fit: cover; /* Ensure images retain aspect ratio */
}

@media screen and (max-width: 1000px) {
  .images-container {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
