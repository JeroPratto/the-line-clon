<template>
  <div class="containerAdventagesColumns">
    <div
      v-for="(item, index) in advantages"
      :key="index"
      :class="{ reverse: index % 2 != 0 }"
      class="containerItem"
    >
      <div class="containerData">
        <p class="titleItem">{{ item.title }}</p>
        <p class="descriptionItem">{{ item.description }}</p>
      </div>
      <div class="containerImage">
        <img :src="item.urlBackgroundImage" :alt="item.title" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AdvantagesColumnsService from "@/services/AdvantagesColumnsService";

const advantages = AdvantagesColumnsService();
</script>

<style scoped>
.containerAdventagesColumns {
  background-color: #f9f7f2;
  background-image: url("/adventages/adventages-columns.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  padding: 100px 5em;
  display: flex;
  flex-direction: column;
  gap: calc(clamp(20px, 4.8611111111vw, 70px) * 2);
  color: #1d1f22;
}
.containerItem {
  display: flex;
  height: 400px;
  gap: 10%;
}
.reverse {
  flex-direction: row-reverse;
}
.containerData {
  width: 50%;
  padding-top: 75px;
}
.containerImage {
  width: 50%;
}
.containerImage img {
  width: 100%;
  height: 100%;
}
.titleItem {
  font-size: clamp(21px, calc(17.5px + 0.72917vw), 28px);
  font-weight: 500;
  text-align: center;
}
.descriptionItem {
  margin-top: 30px;
  font-size: clamp(16px, calc(13.5px + 0.52083vw), 21px);
  font-weight: 300;
  text-align: center;
}
@media screen and (max-width: 1250px) {
  .containerAdventagesColumns {
    padding: 100px 2em;
  }
  .containerItem {
    height: 350px;
  }
}
@media screen and (max-width: 1000px) {
  .containerAdventagesColumns {
    padding: 100px 1em;
  }
  .containerItem {
    display: flex;
    flex-direction: column;
    height: auto;
  }
  .containerData {
    width: 100%;
  }
  .containerImage {
    margin-top: 30px;
    width: 100%;
  }
  .containerData {
    padding-top: 0;
  }
  .descriptionItem {
    margin-top: 0;
  }
  .titleItem {
    text-align: start;
  }
  .descriptionItem {
    margin-top: 30px;
    text-align: start;
  }
}
</style>

<!-- clamp(20px,4.8611111111vw,70px) -->
