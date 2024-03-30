<template>
  <div class="home-page">
    <img
      class="home-page-image"
      v-if="!!imgUrl"
      :src="imgPath"
      alt="HomePage Image"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { fetchHomePageImage } from "../DL/HomePageDL";
export default Vue.extend({
  name: "HomePage",
  data() {
    return {
      imgUrl: "",
    };
  },
  computed: {
    imgPath() {
      console.log(this.imgUrl);
      return require(`../assets/imgs/${this.imgUrl}`);
    },
  },
  async created() {
    this.imgUrl = await fetchHomePageImage();
  },
});
</script>

<style scoped>
.home-page {
  padding: 1rem;
}
.home-page-image {
  width: 100%;
  object-fit: contain;
}
</style>
