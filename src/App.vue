<template>
  <v-app>
    <v-main>
      <NavBar>
        <template v-slot:main>
          <HeroCarousel />
          <HomeRegionsTheLine />
          <ExplanationTheLine />
          <Advantages />
          <AdvantagesColumns />
          <HowTheLineCarousel />
          <InformedFrom />
        </template>
      </NavBar>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import "@/assets/global.css";
import HeroCarousel from "./components/Carousel/HeroCarousel.vue";
import HomeRegionsTheLine from "./components/HomeRegionsTheLine/HomeRegionsTheLine.vue";
import ExplanationTheLine from "./components/ExplanationTheLine/ExplanationTheLine.vue";
import Advantages from "./components/advantages/Advantages.vue";
import AdvantagesColumns from "./components/AdvantagesColumns/AdvantagesColumns.vue";
import HowTheLineCarousel from "./components/Carousel/HowTheLineCarousel.vue";
import InformedFrom from "./components/InformedForm/InformedForm.vue";
import NavBar from "./components/Navbar/NavBar.vue";
</script>
