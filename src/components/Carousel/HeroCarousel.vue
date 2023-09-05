<template>
  <CarouselDefault>
    <template v-slot:MediaAndData>
      <v-carousel-item
        v-for="(Data, i) in HeroData"
        :key="i"
        class="containerItem"
      >
        <video
          :src="Data.urlBackgroundVideo"
          autoplay
          loop
          muted
          class="carouselVideo"
        ></video>
        <div class="containerHeroData">
          <h1 class="heroTitle">{{ Data.title }}</h1>
          <p class="heroDescription">{{ Data.description }}</p>
          <div class="containerHeroBtns">
            <a :href="Data.urlYoutubeVideo" class="btnYoutube" target="_blank"
              ><v-icon icon="mdi-play" size="x-large" color="#000"></v-icon
            ></a>
            <a :href="Data.urlGoToForm" class="btnGetInTouch">GET IN TOUCH</a>
          </div>
        </div>
      </v-carousel-item>
    </template>
  </CarouselDefault>
</template>

<script setup lang="ts">
import HeroDataService from "@/services/HeroDataService";
import CarouselDefault from "./CarouselDefault.vue";
const HeroData = HeroDataService();
</script>

<style scoped>
.containerItem {
  height: 100%;
  width: 100%;
  position: relative;
}

.carouselVideo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.containerHeroData {
  position: absolute;
  bottom: 3em;
  left: 3em;
  display: flex;
  flex-direction: column;
  gap: 1em;
  color: #fff;
}
.heroTitle {
  font-size: clamp(28px, calc(17px + 2.29167vw), 50px);
}
.heroDescription {
  font-size: clamp(21px, calc(17.5px + 0.72917vw), 28px);
}

.heroTitle {
  animation: fadeInUp 1s ease-in forwards;
  opacity: 0;
  animation-delay: 0.2s;
}

.heroDescription {
  animation: fadeInUp 1s ease-in forwards;
  opacity: 0;
  animation-delay: 0.3s;
}

.containerHeroBtns {
  animation: fadeInUp 1s ease-in forwards;
  opacity: 0;
  animation-delay: 0.5s;
  display: flex;
  gap: 1em;
  color: #000;
}
.btnYoutube {
  height: 60px;
  width: 60px;
  border-radius: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btnGetInTouch {
  height: 60px;
  border-radius: 60px;
  padding: 0 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  font-size: 16px;
  font-weight: 500;
}

@media screen and (max-width: 750px) {
  .containerHeroData {
    width: 100%;
    left: 1em;
  }
  .btnGetInTouch {
    width: calc(100% - 100px);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
