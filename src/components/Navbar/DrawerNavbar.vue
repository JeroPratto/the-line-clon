<template>
  <v-navigation-drawer v-model="drawer" temporary location="right">
    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-view-dashboard"
        title="Home"
        value="home"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-forum"
        title="About"
        value="about"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-btn color="primary" @click.stop="drawer = !drawer"> Toggle </v-btn>
</template>

<script setup lang="ts">
import { ref } from "vue";

let drawer = ref(false);
</script>

<style scoped>
.containerDrawer {
  height: 100vh;
}
.navigationDrawer {
  height: 100vh;
  width: 100%;
}
</style>
