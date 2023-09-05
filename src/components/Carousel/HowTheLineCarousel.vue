<template>
  <CarouselDefault>
    <template v-slot:MediaAndData>
      <v-carousel-item
        v-for="(data, i) in dataHowTheLine"
        :key="i"
        class="containerItem"
        :src="data.urlImage"
        cover
      >
        <div class="containerDescription">
          <p class="description">{{ data.description }}</p>
          <div class="containerBtns">
            <a :href="data.urlYoutube" class="btnYoutube" target="_blank">
              <v-icon icon="mdi-play" size="x-large" color="#000"></v-icon>
            </a>
          </div>
        </div>
      </v-carousel-item>
    </template>
  </CarouselDefault>
</template>
<script setup lang="ts">
import CarouselDefault from "./CarouselDefault.vue";
import HowTheLineService from "@/services/HowTheLineService";

const dataHowTheLine = HowTheLineService();
</script>

<style scoped>
.containerItem {
  height: 100%;
  width: 100%;
  position: relative;
}
.containerDescription {
  position: absolute;
  bottom: 3em;
  left: 3em;
  display: flex;
  flex-direction: column;
  gap: 1em;
  color: #fff;
}

.description {
  font-size: 21px;
  animation: fadeInUp 1s ease-in forwards;
  opacity: 0;
  animation-delay: 0.2s;
  max-width: 50vw;
  width: 500px;
  font-weight: 300;
}

.containerBtns {
  animation: fadeInUp 1s ease-in forwards;
  opacity: 0;
  animation-delay: 0.4s;
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
@media screen and (max-width: 750px) {
  .containerDescription {
    left: 1em;
  }
  .description {
    max-width: 75vw;
    width: auto;
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
