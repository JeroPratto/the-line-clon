<template>
  <ul class="containerBreadcrumbs">
    <li v-for="(bread, index) in breadData" :key="index" class="containerItem">
      <p class="item">{{ bread }}</p>
      <v-icon
        v-if="index < breadData.length - 1"
        icon="mdi-chevron-right"
        size="x-small"
        color="rgba(29,31,34,.3)"
      ></v-icon>
    </li>
  </ul>
</template>

<script setup lang="ts">
const breadData = ["HOME", "REGIONS", "THE LINE"];
</script>

<style scoped>
.containerBreadcrumbs {
  padding: 1.5em 0 1em 3em;
  width: 100%;
  display: flex;
  gap: 2px;
}
.containerItem {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
}

.item {
  color: var(--yellow);
  font-size: 12px;
}
.item:last-child {
  color: #000;
}
@media screen and (max-width:750px) {
  .containerBreadcrumbs{
    padding-left: 1em;
  }
}
</style>
