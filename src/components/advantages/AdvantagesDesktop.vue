<template>
  <div class="containerAdventages">
    <h3 class="title">A REVOLUTION IN CIVILIZATION</h3>
    <div
      v-for="(item, index) in Adventages"
      :key="index"
      class="item"
      @mouseover="selectItem(index)"
      @mouseout="selectItem(null)"
      :class="{ inactive: selectedItem != index && selectedItem != null }"
    >
      <div class="containerImage">
        <img
          :src="item.urlBackgroundImage"
          :alt="item.title"
          class="backgroundImage"
        />
        <div class="overlay"></div>
      </div>
      <div class="containerData">
        <p class="titleItem">{{ item.title }}</p>
        <p class="descriptionItem">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AdventageService from "@/services/AdvantagesService";
import { ref } from "vue";
const Adventages = AdventageService();
const selectedItem = ref(null);
const selectItem = (index: any) => {
  selectedItem.value = index;
};
</script>

<style scoped>
.title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;
  z-index: 50;
  font-size: clamp(28px, calc(17px + 2.29167vw), 50px);
  font-weight: 600;
  letter-spacing: clamp(0.09em, calc(0.09em + 0.00313vw - 0.015px), 0.12em);
  width: 75%;
  visibility: visible;
  transition: opacity 0.4s cubic-bezier(0.215, 0.61, 0.355, 1), visibility 0.4s;
}
.containerAdventages {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  position: relative;
}

.containerAdventages:hover .title {
  opacity: 0;
  visibility: hidden;
}
.item {
  flex: 1;
  height: 100%;
  transition: flex 0.8s cubic-bezier(0.19, 1, 0.22, 1);
  position: relative;
}
.backgroundImage {
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}
/* #f3efe5; */
.containerImage {
  position: relative;
  height: 100%;
  width: 100%;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(20, 20, 20, 0.5);
}
.containerData {
  position: absolute;
  top: 5vh;
  left: 5%;
  right: 5%;
}
.descriptionItem {
  display: none;
  font-size: 1.1em;
  font-weight: 300;
  animation: fadeInUp 1s ease-in forwards;
  opacity: 0;
}
.titleItem {
  transition: opacity 0.3s;
  font-size: 1.1em;
  font-weight: 800;
  letter-spacing: clamp(0.09em, calc(0.09em + 0.00313vw - 0.015px), 0.12em);
  min-height: 80px;
  padding: 0 20px;
  width: 300px;
  margin-bottom: 30px;
  border-left: 3px solid #ebc03f;
}

.item:hover {
  flex: 1.6;
}
.inactive .titleItem {
  opacity: 0;
}
.item:hover .descriptionItem {
  display: flex;
}

@media screen and (max-width: 1000px) {
  .titleItem {
    width: 200px;
  }
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(50%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
