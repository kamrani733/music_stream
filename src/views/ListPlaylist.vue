<template>
  <div class="outer-container">
    <main class="content">
      <topMain />
      <div class="container">
        <PlaylistItem v-for="item in playlists" v-bind="item" :key="item.id" />
      </div>
      <SeekBar />
    </main>
    <SideBar />
  </div>
</template>
<script setup>
import "../assets/style/scss/style.scss";
import topMain from "@/components/topMain.vue";
import SeekBar from "@/components/SeekBar.vue";
import SideBar from "@/components/SideBar.vue";
import PlaylistItem from "@/components/PlaylistItem.vue";
const playlists = [
  {
    id: 0,
    tittle: "غیرمعمولی",
    createBy: "ایجاد شده توسط فاطمه",
    img: "playlistCover1.png",
  },
  {
    id: 1,
    tittle: "علاقه ",
    createBy: "ایجاد شده توسط فاطمه",
    img: "playlistCover1.png",
  },
  {
    id: 2,
    tittle: "  خاص",
    createBy: "ایجاد شده توسط فاطمه",
    img: "playlistCover1.png",
  },
  {
    id: 3,
    tittle: "تماشا",
    createBy: "ایجاد شده توسط فاطمه",
    img: "playlistCover1.png",
  },
  {
    id: 4,
    tittle: "قاصدک",
    createBy: "ایجاد شده توسط فاطمه",
    img: "playlistCover1.png",
  },
  {
    id: 5,
    tittle: "قاصدک",
    createBy: "ایجاد شده توسط فاطمه",
    img: "playlistCover1.png",
  },
  {
    id: 6,
    tittle: "قاصدک",
    createBy: "ایجاد شده توسط فاطمه",
    img: "playlistCover1.png",
  },
  {
    id: 7,
    tittle: "قاصدک",
    createBy: "ایجاد شده توسط فاطمه",
    img: "playlistCover1.png",
  },
];
</script>
