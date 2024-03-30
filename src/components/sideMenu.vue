<template>
  <div class="side-menu-div">
    <img class="ul-img" src="../assets/imgs/nav-bg.png" alt="" />
    <ul>
      <li
        v-for="listItem in listData"
        :key="listItem.name"
        class="list-item"
        @click="() => handleListItemClick(listItem.link)"
      >
        {{ listItem.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      listData: [
        { name: "About", link: "/about" },
        { name: "Works", link: "/works" },
        {
          name: "My Sound Cloud",
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

<style>
.side-menu-div {
  /* may be changed later */
  margin-top: 1rem;
  width: 11.25rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.ul-img {
  height: 1rem;
}
.list-item:hover {
  background-color: #ddd;
  cursor: pointer;
}

.list-item {
  text-decoration: none;
  color: #010000;
  font-family: Tahoma;
  font-size: 14pt;
  line-height: 2.2rem;
}
</style>
