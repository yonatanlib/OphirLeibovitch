<template>
  <div class="side-menu-div">
    <img class="ul-img" src="../assets/imgs/nav-bg.png" alt="" />
    <ul>
      <li v-for="listItem in listData" :key="listItem.name" class="list-item">
        <a class="link-item" :href="listItem.link">{{ listItem.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SideMenu",
  data() {
    return {
      listData: [
        { name: "About", link: "#" },
        { name: "Works", link: "#" },
        { name: "My Sound Cloud", link: "#" },
        { name: "Tractor's Revenge", link: "#" },
        { name: "Contact", link: "#" },
      ],
    };
  },
};
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
}
.list-item {
  width: 10.5rem;
}
.link-item {
  height: 1rem;
  text-decoration: none;
  color: #010000;
  font-family: Tahoma;
  font-size: 14pt;
  padding-left: 1rem;
  line-height: 2.2rem;
}
</style>
