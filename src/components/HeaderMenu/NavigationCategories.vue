<template>
  <div class="categories-container">
    <p
      v-for="item in listData"
      :key="item.name"
      @click="() => handleListItemClick(item.link)"
      class="category-item"
    >
      {{ item.name }}
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "NavigationCategories",
  data() {
    return {
      listData: [
        { name: "About", link: "/about" },
        { name: "Works", link: "/works" },
        {
          name: "Sound Cloud",
          link: "http://soundcloud.com/ophir-leibovitch",
        },
        { name: "Tractor's Revenge", link: "http://www.tractor.co.il/" },
        { name: "Contact", link: "/contact" },
      ],
    };
  },
  methods: {
    handleListItemClick(link: string) {
      if (link.startsWith("/")) this.$router.push(link);
      else window.open(link, "_blank");
    },
  },
});
</script>

<style scoped>
.categories-container {
  display: flex;
}

.category-item {
  color: white;
  cursor: pointer;
  margin-inline: 1.5rem;
  font-family: Dosis;
  font-weight: 700;
  font-style: normal;
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
}
</style>
