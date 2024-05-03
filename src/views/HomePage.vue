<template>
  <div class="home-page">
    <img
      class="home-page-image"
      v-if="!!imgUrl"
      :src="imgPath"
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
import HomePageDL from "../DL/HomePageDL";
export default Vue.extend({
  name: "HomePage",
  data() {
    return {
      imgUrl: "",
    };
  },
  computed: {
    imgPath() {
      return require(`../assets/imgs/${this.imgUrl}`);
    },
  },
  async created() {
    this.imgUrl = await HomePageDL.fetchHomePageImage();
  },
});
</script>

<style scoped>
.home-page {
  padding: 1rem;
}
.home-page-image {
  display: block;
  object-fit: contain;
  min-height: 75vh;
  max-width: 90vw;
  margin: auto;
}
</style>
