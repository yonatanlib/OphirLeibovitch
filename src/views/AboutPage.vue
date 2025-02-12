<template>
  <div class="about-div">
    <h2 class="page-title">COMPOSER & MULTI-INSTRUMENTALIST</h2>
    <div class="img-text-wrapper">
      <div class="img-wrapper">
        <img
          class="ophir-about-img"
          src="../assets/imgs/test.png"
          alt=""
          sizes=""
        />
      </div>
      <div class="about-text">
        <p>
          Award-winning Film composer,
          <b>Israeli music Oscar for Foxtrot</b> and three times
          <b>Israeli Oscar nominee</b>, with over hundred scores on his growing
          record, Ophir Leibovitch is one of the most endearingly highly
          evaluated musicians in the Israeli film industry.
        </p>
        <p>
          Leibovitch is the recipient of the prestige and honorable 2012
          <b>ACUM award</b> (The Israeli Association of Authors, Publishers, and
          music composers) for best television and films original composer.
        </p>
        <p>
          He is known for his comprehensive cinematheque understanding that
          allows him to both nurture a unique seamlessly relationship with
          Directors and contribute to Film educational programs as a committee
          member for student films.
        </p>
        <p>
          In 2015, Leibovitch was awarded <b>The Haggiag Best Music Award</b> at
          the Jerusalem International Film Festival, for his score of the
          Documentary “Strung Out”.
        </p>
        <p>
          In 2018, he was awarded the
          <b>Best Music for a Documentary Film Award</b> by the Israeli
          Documentary Forum for his score for the film "Wild".
        </p>
        <p>
          With numerous of his scores produced for festivals such as IDFA,
          Venice International Film Festival, Palm Springs, Tribeca Film
          Festival, Berlinale international film festival, Leibovitch has lately
          invaded to the American scene while writing the score to AOL’s debut
          reality series “Connected”.
        </p>
        <p>
          Leibovitch is one of the founders of 'The Tractor's Revenge' band.
          Established in 89' ‘The Tractor's revenge' is evaluated as one of
          today’s most appreciated bands in Israel. Holding more than seven
          albums and two Gold records, the Band’s music strives from popular
          rock music to designated signature repertoire of the Israeli culture.
          The band released their new album in October 2011.
        </p>
        <p>
          Among their music, the 'Tractor's revenge' have composed ‘Kyr’ by Ohad
          Naharin for the 'Bat Sheva Dance Company’, and Leibovitch played his
          score touring with the company on stages worldwide. The group had also
          composed the live music of ‘Romeo and Juliet’ for The Haifa Theater
          and ‘Otelo’, which is signed with the avant-garde record label ‘Muzea’
          in France.
        </p>
        <p>
          Additionally, the band worked with ‘Or-cutter’, the Netherlands
          Avant-garde group, for The Jerusalem ‘Phenomena’ Festival.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
};
</script>

<style scoped>
.about-div {
  display: flex;
  flex-direction: column;
  padding-inline: 4rem;
}

.page-title {
  align-self: flex-start;
  color: white;
  font-family: Dosis;
  font-weight: 400;
  font-style: normal;
  font-size: 44px;
  letter-spacing: 3px;
  line-height: 1.1em;
  text-transform: uppercase;
  margin-inline-start: 4rem;
  margin-block-end: 1rem;
}

.img-text-wrapper {
  display: flex;
  flex-grow: 1;
}

.img-wrapper {
  width: 23.333337%;
  max-height: 100vh;
  flex-grow: 1;
}

.ophir-about-img {
  position: relative;
  object-fit: contain;
  width: 100%;
  height: auto;
  aspect-ratio: 2/3;
}
.about-text {
  flex-grow: 2;
  width: 66.66667%;
  text-align: left;
  font-size: 1.3rem;
}

.about-text p:first-child {
  margin-block-start: 0;
}

@media screen and (max-width: 768px) {
  .img-text-wrapper {
    flex-direction: column;
    align-items: center;
  }
  .about-div {
    padding-inline: 1rem;
  }
  .page-title {
    font-size: 2rem;
    margin-inline-start: 1rem;
    -webkit-margin-start: 1rem;
    margin-bottom: 0;
  }

  .img-wrapper {
    width: 100%;
    max-height: unset;
    margin-block: 1rem;
  }
  .about-text {
    width: 90%;
    text-align: center;
  }
}
</style>
