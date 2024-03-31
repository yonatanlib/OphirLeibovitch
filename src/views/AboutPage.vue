<template>
  <div class="about-div">
    <img class="ophir-about-img" src="../assets/imgs/ophir-about.png" alt="" />
    <div class="about-text">
      <p>
        Award-winning Film composer, <b>Israeli music Oscar for Foxtrot</b> and
        three times <b>Israeli Oscar nominee</b>, with over hundred scores on
        his growing record, Ophir Leibovitch is one of the most endearingly
        highly evaluated musicians in the Israeli film industry.
      </p>
      <p>
        Leibovitch is the recipient of the prestige and honorable 2012
        <b>ACUM award</b> (The Israeli Association of Authors, Publishers, and
        music composers) for best television and films original composer.
      </p>
      <p>
        He is known for his comprehensive cinematheque understanding that allows
        him to both nurture a unique seamlessly relationship with Directors and
        contribute to Film educational programs as a committee member for
        student films.
      </p>
      <p>
        In 2015, Leibovitch was awarded <b>The Haggiag Best Music Award</b> at
        the Jerusalem International Film Festival, for his score of the
        Documentary “Strung Out”.
      </p>
      <p>
        With numerous of his scores produced for festivals such as IDFA, Venice
        International Film Festival, Palm Springs, Tribeca Film Festival,
        Berlinale international film festival, Leibovitch has lately invaded to
        the American scene while writing the score to AOL’s debut reality series
        “Connected”.
      </p>
      <p>
        Leibovitch is one of the founders of 'The Tractor's Revenge' band.
        Established in 89' ‘The Tractor's revenge' is evaluated as one of
        today’s most appreciated bands in Israel. Holding more than seven albums
        and two Gold records, the Band’s music strives from popular rock music
        to designated signature repertoire of the Israeli culture. The band
        released their new album in October 2011.
      </p>
      <p>
        Among their music, the 'Tractor's revenge' have composed ‘Kyr’ by Ohad
        Naharin for the 'Bat Sheva Dance Company’, and Leibovitch played his
        score touring with the company on stages worldwide. The group had also
        composed the live music of ‘Romeo and Juliet’ for The Haifa Theater and
        ‘Otelo’, which is signed with the avant-garde record label ‘Muzea’ in
        France.
      </p>
      <p>
        Additionally, the band worked with ‘Or-cutter’, the Netherlands
        Avant-garde group, for The Jerusalem ‘Phenomena’ Festival.
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
  justify-content: center;
}

.ophir-about-img {
  order: 2;
  position: relative;
  object-fit: contain;
  width: 13rem;
  margin-left: 2rem;
}
.about-text {
  order: 1;
  max-width: 50rem;
  text-align: center;
}
</style>
