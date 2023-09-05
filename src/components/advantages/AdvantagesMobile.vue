<template>
  <v-expansion-panels>
    <p class="title">A REVOLUTION IN CIVILIZATION</p>
    <v-expansion-panel
      v-for="(advantage, index) in advantages"
      :key="index"
      class="container"
    >
      <v-expansion-panel-title>
        <template v-slot:actions="{ expanded }">
          <v-icon
            class="icon"
            color="#fff"
            :icon="expanded ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          ></v-icon>
        </template>
        <div class="containerTitleAndImg">
          <img
            :src="advantage.urlBackgroundImage"
            :alt="advantage.title"
            class="backgroundImg"
          />
          <div class="overlay"></div>
          <div class="containerTitle">
            <p>{{ advantage.title }}</p>
          </div>
        </div>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <div class="containerText">
          <p>{{ advantage.description }}</p>
        </div>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script setup lang="ts">
import AdvantagesService from "@/services/AdvantagesService";

const advantages = AdvantagesService();
</script>

<style scoped>
.title {
  width: 100%;
  background-color: #f3efe5;
  font-size: clamp(28px, calc(17px + 2.29167vw), 50px);
  text-align: center;
  font-weight: 500;
  letter-spacing: 1px;
  padding: 28px 20px;
}
.v-expansion-panel-title {
  padding: 0;
  position: relative;
  width: 100%;
  aspect-ratio: 2.1/1;
}
.containerTitleAndImg {
  position: absolute;
  width: 100%;
  height: 100%;
}
.backgroundImg {
  position: absolute;
  object-fit: cover;
  object-position: center center;
  width: 100%;
  height: 100%;
}
.containerTitle {
  position: absolute;
  color: #fff;
  z-index: 40;
  top: 50%;
  left: 3em;
  transform: translateY(-50%);
  border-left: 3px solid #ebc03f;
  height: 50%;
  padding-left: 15px;
}
.containerTitle p {
  font-size: 16px;
  font-weight: 500;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(20, 20, 20, 0.5);
}
.icon {
  padding-right: 1em;
}
.containerText {
  background-color: #f3efe5;
  padding: 2em 1.5em;
}
.containerText p {
  font-size: 16px;
  font-weight: 400;
  color: #1d1f22;
}
</style>
