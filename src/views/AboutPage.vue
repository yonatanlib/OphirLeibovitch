<template>
  <div class="about-div">
    <img class="ophir-about-img" src="../assets/imgs/ophir-about.png" alt="" />
    <div class="about-text">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at
        metus vitae urna aliquet varius. Sed eget magna facilisis, pulvinar
        tellus sed, dignissim metus. Integer a nisi eros. In quis nisl mi. Sed
        rutrum dignissim ipsum ut porta. Morbi interdum tincidunt dictum. Sed
        vitae viverra mauris, vitae faucibus massa. Morbi quis metus at lectus
        tristique porta. In a nisl ac justo volutpat porta. Ut sit amet blandit
        nisl. Nullam consectetur tortor eget diam rutrum dictum. Fusce sagittis
        nibh quis facilisis accumsan. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Cras aliquam urna nec ipsum pulvinar, nec dignissim
        ante efficitur. Nam vel velit dolor. Duis faucibus erat in molestie
        porta. Phasellus at lorem tempus, egestas purus eu, porta arcu.
        Phasellus arcu nisi, lacinia vitae tellus vitae, eleifend fermentum mi.
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Donec nec sollicitudin nibh. Nunc quis pharetra
        elit, vitae viverra dui. Quisque non erat ut eros blandit suscipit. Nam
        augue erat, pharetra id finibus non, venenatis id turpis. Praesent
        lobortis neque odio, eu elementum turpis pretium sit amet. Phasellus dui
        ex, cursus ac vestibulum in, vestibulum ac est. Nunc fringilla
        consectetur odio sit amet cursus. Ut gravida dignissim auctor. Nullam
        blandit laoreet egestas. Suspendisse nulla ipsum, viverra eget tempor
        eu, vulputate vitae neque. Ut ut dolor gravida, efficitur massa id,
        convallis lectus. Vivamus sed vulputate nunc. Donec eu massa ac urna
        placerat pretium. Ut vel nibh commodo, imperdiet augue nec, cursus
        metus. Nullam neque justo, dignissim et cursus nec, semper in diam.
        Donec sem orci, suscipit a aliquam eu, lacinia quis velit. Sed lobortis
        lacus sit amet lectus cursus dignissim. Quisque mauris nisi, tempor quis
        euismod eu, condimentum fermentum libero. Cras condimentum velit non
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
};
</script>

<style>
.about-div {
  display: flex;
  width: 100%;
}
.ophir-about-img {
  order: 2;
  position: relative;
  /* right: 2rem;
  top: 3rem; */

  width: 13rem;
}
.about-text {
  order: 1;
  width: 36rem;
  text-align: center;
  margin-top: 4rem;
  margin-left: 4rem;
}
</style>
