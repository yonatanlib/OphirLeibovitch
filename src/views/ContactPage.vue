<template>
  <div class="contact-div">
    <div class="contact-details">
      <h1 class="title">CONTACT</h1>
      <h3 class="subtitle">TALENT AGENT</h3>
      <p>Ilan Zahler Talent Management</p>
      <p>e: ilan@rinatveilan.co.il</p>
      <p>p: +972 54-228-2882</p>
      <div class="divider"></div>
      <p>Ophir Leibovitch</p>
      <p>e: opmusic@gmail.com</p>
    </div>
    <div class="contact-img-container">
      <img class="contact-img" src="../assets/imgs/contact-img.jpeg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
};
</script>

<style scoped>
.contact-div {
  display: flex;
  justify-content: center;
  padding-inline: 8rem;
  height: calc(100svh - 5rem);
}

.contact-img-container {
  position: relative;
  width: 25rem;
  height: 39rem;
  align-self: center;
  margin-inline: 2rem;
}

.contact-img {
  object-fit: contain;
  aspect-ratio: 196/319;
  object-position: center;
  width: 100%;
  height: 100%;
  border-radius: 4%;
}

.contact-img-conte::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0) 70%, white 100%);
  z-index: 2;
  mask-image: radial-gradient(
    circle,
    rgba(0, 0, 0, 1) 70%,
    rgba(0, 0, 0, 0) 100%
  );
  -webkit-mask-image: radial-gradient(
    circle,
    rgba(0, 0, 0, 1) 70%,
    rgba(0, 0, 0, 0) 100%
  );
}

.title {
  text-transform: none;
  font-family: Dosis;
  font-weight: 300;
  font-style: normal;
  font-size: 106px;
  letter-spacing: 2px;
  line-height: 1em;
  text-transform: uppercase;
}

.contact-details {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: white;
}

.subtitle {
  font-family: Dosis;
  font-weight: 400;
  font-style: normal;
  font-size: 20px;
  letter-spacing: 3px;
  line-height: 1.2em;
  text-transform: none;
}

.contact-details p {
  color: rgba(255, 255, 255, 0.63);
  font-size: 18px;
  margin-block: 0.75rem;
}

.divider {
  border: 1px solid rgba(255, 255, 255, 0.63);
  width: 75%;
  margin-block: 1rem;
}
</style>
