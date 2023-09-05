<template>
  <v-carousel hide-delimiters :continuous="false">
    <template v-slot:prev="{ props }">
      <CustomButtonCarosuel
        :onClick="props.onClick"
        nameIcon="mdi-arrow-left-thin"
      />
    </template>
    <template v-slot:next="{ props }">
      <CustomButtonCarosuel
        :onClick="props.onClick"
        nameIcon="mdi-arrow-right-thin"
      />
    </template>
    <slot name="MediaAndData" />
  </v-carousel>
</template>

<script setup lang="ts">
import CustomButtonCarosuel from "./CustomButtonCarosuel.vue";
</script>

<style scoped></style>
