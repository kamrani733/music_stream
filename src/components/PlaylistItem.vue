<template>
  <div class="playlistItem">
    <img
      class="playlistItem__cover"
        :src="require(`@/assets/image/pic/${img}`)"
      alt="لیست پخش"
    />
    <div class="wrapper">
      <span class="playlistItem__title">{{ tittle }}</span>
      <img class="playlistItem__optionsImg" src="" />
    </div>
    <span class="playlistItem__creator">{{ createBy }}</span>
  </div>
</template>
<script setup>
import { defineProps } from "vue";

defineProps(["tittle", "createBy", "id", "img"]);
</script>
