<template>
  <AdvantagesDesktop class="desktop" />
  <AdvantagesMobile class="mobile" />
</template>

<script setup lang="ts">
import AdvantagesDesktop from "./AdvantagesDesktop.vue";
import AdvantagesMobile from "./AdvantagesMobile.vue";
</script>

<style scoped>
.mobile {
  display: none;
}
@media screen and (max-width: 750px) {
  .desktop {
    display: none;
  }
  .mobile {
    display: block;
  }
}
</style>
