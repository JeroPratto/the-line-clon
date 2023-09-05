<template>
  <button
    @click="props.onClick"
    class="arrowIconHero iconLeft"
    variant="outlined"
  >
    <v-icon :icon="props.nameIcon" size="x-large" color="#fff"></v-icon>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  onClick: Function;
  nameIcon: string;
}>();
</script>

<style scoped>
.arrowIconHero {
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 100%;
  height: 60px;
  width: 60px;
}
.arrowIconHero:hover {
  background-color: var(--yellow);
}
.iconLeft {
  margin: 2em;
}
</style>
