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

.title {
  text-transform: none;
  font-family: Dosis;
  font-weight: 300;
  font-style: normal;
  font-size: 6.625rem;
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

@media screen and (max-width: 1000px) {
  .contact-div {
    flex-direction: column;
    padding-inline: 2rem;
  }

  .contact-img-container {
    width: 100%;
    height: 100%;
    margin-block: 2rem;
  }

  .contact-img {
    border-radius: 0;
  }

  .title {
    font-size: 4.5rem;
    letter-spacing: 1px;
    line-height: unset;
    margin-block-end: 1rem;
  }

  .subtitle {
    font-size: 16px;
    letter-spacing: 2px;
  }

  .contact-details p {
    font-size: 16px;
  }

  .divider {
    width: 100%;
  }
}
</style>
