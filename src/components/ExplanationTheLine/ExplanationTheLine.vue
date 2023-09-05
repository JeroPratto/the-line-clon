<template>
  <div class="containerExplanation">
    <div class="containerData">
      <img src="/explanation-sky.jpg" alt="" class="skyImage" />
      <p>
        No roads, cars or emissions, it will run on 100% renewable energy and
        95% of land will be preserved for nature. People's health and wellbeing
        will be prioritized over transportation and infrastructure, unlike
        traditional cities.
      </p>
      <p>
        THE LINE will eventually accommodate 9 million people and will be built
        on a footprint of just 34 square kilometers. This will mean a reduced
        infrastructure footprint, creating never-before-seen efficiencies in
        city functions. The ideal climate all-year-round will ensure that
        residents can enjoy the surrounding nature. Residents will also have
        access to all daily essentials within a five-minute walk, in addition to
        high-speed rail with an end-to-end transit of 20 minutes.
      </p>
    </div>
    <img
      src="/explanation-the-line-background.webp"
      alt="The line about"
      class="theLineImage"
    />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.containerExplanation {
  background-color: #8a400e;
}
.containerData {
  padding: 2em 20%;
  font-size: clamp(21px, calc(17.5px + 0.72917vw), 28px);
  text-align: center;
  position: relative;
}
.containerData .skyImage {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
}
.containerData p {
  position: relative;
}

.containerData p:last-child {
  padding-top: 1em;
  font-size: clamp(16px, calc(13.5px + 0.52083vw), 21px);
  font-weight: 300;
}

.theLineImage {
  height: 100%;
  width: 100%;
}
@media screen and (max-width: 1000px) {
  .containerData {
    padding: clamp(20px, 4.8611111111vw, 70px);
  }
}
@media screen and (max-width: 750px) {
  .theLineImage {
    height: 70vh;
  }
}
</style>
