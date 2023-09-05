<template>
  <v-app-bar
    :color="colorNavbar"
    ref="navbar"
    prominent
    class="containerNavbar"
  >
    <v-toolbar-title>
      <div class="containerLogo">
        <img src="/logo-neom.webp" alt="Logo" />
      </div>
    </v-toolbar-title>
    <a href="#contactForm" class="invest">INVEST IN NEOM</a>
    <v-btn
      density="compact"
      icon="mdi-menu"
      color="#fff"
      @click.stop="drawer = !drawer"
      class="btnDrawer"
    ></v-btn>
  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    color="#1D1F22"
    location="right"
    temporary
    class="drawer"
  >
    <v-icon
      icon="mdi-close"
      size="large"
      color="#fff"
      @click.stop="drawer = !drawer"
      class="btnDrawerClose"
    ></v-icon>
    <ul class="containerDrawer">
      <li><v-btn class="btnDrawerList">ABOUT</v-btn></li>
      <li><v-btn class="btnDrawerList">REGIONS</v-btn></li>
      <li><v-btn class="btnDrawerList">OUR BUSINESS</v-btn></li>
      <li><v-btn class="btnDrawerList">NEWS</v-btn></li>
      <li><v-btn class="btnDrawerList">INVEST IN NEOM</v-btn></li>
      <li><v-btn class="btnDrawerList">CAREERS</v-btn></li>
    </ul>
  </v-navigation-drawer>
  <slot name="main"></slot>
</template>

<script setup lang="ts">
import { ref } from "vue";
let drawer = ref(false);
let colorNavbar = ref("transparent");
window.addEventListener("scroll", function () {
  if (window.scrollY < 200) {
    colorNavbar.value = "transparent";
  } else {
    colorNavbar.value = "#1D1F22";
  }
});
</script>

<style scoped>
.containerNavbar {
  padding: 0 1em;
}
.drawer {
  height: 100vh !important;
  width: 400px !important;
}
.btnDrawer {
  padding-right: 1em;
}
.btnDrawerClose {
  position: absolute;
  top: 20px;
  right: 15px;
}
.containerDrawer {
  margin-top: 64px;
}
.containerDrawer li {
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}
.containerDrawer li:first-child {
  border-top: 1px solid rgba(255, 255, 255, 0.3);
}
.btnDrawerList {
  background-color: #1d1f22;
  padding: 25px 30px;
  width: 100%;
  height: 100%;
}
.containerLogo {
  padding: 5px;
  padding-left: 0;
  height: 100%;
  width: 50px;
}
.containerLogo img {
  height: 100%;
  width: 100%;
}
.invest {
  color: #000;
  font-size: 12px;
  letter-spacing: 0.12em;
  margin-right: 40px;
  background-color: #fff;
  padding: 10px 25px;
  border-radius: 25px;
}
@media screen and (max-width: 600px) {
  .drawer {
    width: 100% !important;
  }
}
</style>
