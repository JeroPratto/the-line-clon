<template>
  <div class="containerHomeRegions">
    <BreadCrumbs />
    <div class="containerDescription">
      <h2 class="title">THE FUTURE OF URBAN LIVING</h2>
      <p class="description">
        A cognitive city stretching across 170 kilometers, from the epic
        mountains of NEOM across inspirational desert valleys to the beautiful
        Red Sea. A mirrored architectural masterpiece towering 500 meters above
        sea level, but a land-saving 200 meters wide. THE LINE redefines the
        concept of urban development and what cities of the future will look
        like. A civilizational revolution, its unparalleled livability can be
        explored at THE LINE Exhibition now welcoming visitors in Riyadh.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import BreadCrumbs from "./BreadCrumbs.vue";
</script>

<style scoped>
.containerHomeRegions {
  background-image: url("/regions-background.jpg");
  background-position: center center;
  background-repeat: none;
  background-size: cover;
}
.containerDescription {
  padding: 8em 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2em;
}
.title {
  font-size: clamp(28px, calc(17px + 2.29167vw), 50px);
  letter-spacing: clamp(0.09em, calc(0.09em + 0.00313vw - 0.015px), 0.12em);
  color: #1d1f22;
  text-align: center;
  font-weight: 400;
}
.description {
  font-size: clamp(16px, calc(13.5px + 0.52083vw), 21px);
  text-align: center;
  font-weight: 300;
}
@media screen and (max-width: 750px) {
  .containerDescription {
    padding: clamp(20px, 4.8611111111vw, 70px);
    padding-bottom: 4em;
  }
}
</style>
