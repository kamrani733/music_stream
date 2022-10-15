<template>
  <div class="outer-container">
    <main class="content">
      <header class="header">
        <div class="sign-buttons">
          <div class="sign-buttons__signin">
            <router-link to="login"> ورود </router-link>
          </div>
          <div class="sign-buttons__register">
            <router-link to="register"> ثبت نام </router-link>
          </div>
        </div>
        <searchBar />
      </header>
      <div class="slider-premium">
        <div class="slider">
          <img
            class="slider-img"
            src="../assets/image/pic/homayon2.png"
            alt=""
          />
          <div class="slider-text">
            <p class="slider-text__p1">همایون شجریان</p>
            <p class="slider-text__p2">ارکستر سیاوش به رهبری آرش گوران</p>
            <p class="slider-text__p3">
              مرکز همایش های کشور - تیرماه ۱۴۰۱ - خرید بلیط
            </p>
          </div>
        </div>
        <div class="premium">
          <img
            class="premium-img"
            src="../assets/image/icons/Bold/medal-star-orange.png"
            alt=""
          />
          <div class="premium-title">خرید اکانت ویژه ۶ ماهه</div>
          <div class="premium-price">۶۵۰۰۰ تومان</div>
          <div class="premium-desc">
            لورم ایپسوم متن آماده برای جایگذاری در سیستم تولید محتوا می باشد.
          </div>
        </div>
      </div>
      <div class="playlist-tabs">
        <div class="playlist">
          <div class="playlist-tittle">
            <div class="playlist-tittle__header">جدید ترین آهنگ ها</div>
            <div class="playlist-tittle__showmore">مشاهده همه</div>
          </div>
          <div class="playlist-back">
            <div v-for="item in newMusics" :key="item.id" class="playlist-list">
              <img
                class="playlist-list__img"
                :src="require(`@/assets/image/pic/${item.img}`)"
              />
              <div class="playlist-list__music">{{ item.tittle }}</div>
              <div class="playlist-list__singer">{{ item.singer }}</div>
            </div>
          </div>
          <div class="playlist-tittle">
            <div class="playlist-tittle__header">لیست پخش منتخب</div>
            <div class="playlist-tittle__showmore">مشاهده همه</div>
          </div>
          <div class="playlist-back special-list">
            <div
              class="playlist-list"
              v-for="item in specialList"
              :key="item.id"
            >
              <img
                class="playlist-list__img"
                :src="require(`@/assets/image/pic/${item.img}`)"
              />
              <div class="playlist-list__music">{{ item.tittle }}</div>
              <div class="playlist-list__singer">{{ item.singer }}</div>
            </div>
          </div>
        </div>
        <div v-if="isActiveFaw" class="tabs">
          <div class="tabs-buttons">
            <div @click="showHistory" class="tabs-buttons__history">
              تاریخچه پخش
            </div>
            <div @click="showFav" class="tabs-buttons__favorite">
              محبوب ترین آهنگ ها
            </div>
          </div>
          <div class="tabs-lists">
            <div
              class="tabs-lists__music"
              v-for="item in Favmusics"
              :key="item.id"
            >
              <div class="tabs-music__cover">
                <img
                  class="music__cover__img"
                  :src="require(`@/assets/image/pic/${item.img}`)"
                  alt=""
                />
              </div>
              <div class="tabs-music__info">
                <div class="music__info__name">{{ item.tittle }}</div>
                <div class="music__info__icons music-icon">
                  <img
                    class="music-icon__like"
                    src="../assets/image/icons/Bold/heart-fill.png"
                    alt=""
                  />
                  <span>{{ item.like }}</span>
                  <img
                    class="music-icon__play"
                    src="../assets/image/icons/Bold/play-fill.png"
                    alt=""
                  />
                  <span>{{ item.play }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="isActiveHistory" class="tabs">
          <div class="tabs-buttons">
            <div @click="showHistory" class="tabs-buttons__favorite">
              تاریخچه پخش
            </div>
            <div @click="showFav" class="tabs-buttons__history active-tab">
              محبوب ترین آهنگ ها
            </div>
          </div>
          <div class="tabs-lists">
            <div
              class="tabs-lists__music"
              v-for="item in Historymusics"
              :key="item.id"
            >
              <div class="tabs-music__cover">
                <img
                  class="music__cover__img"
                  :src="require(`@/assets/image/pic/${item.img}`)"
                  alt=""
                />
              </div>
              <div class="tabs-music__info">
                <div class="music__info__name">{{ item.tittle }}</div>
                <div class="music__info__icons music-icon">
                  <img
                    class="music-icon__like"
                    src="../assets/image/icons/Bold/heart-fill.png"
                    alt=""
                  />
                  <span>{{ item.like }}</span>
                  <img
                    class="music-icon__play"
                    src="../assets/image/icons/Bold/play-fill.png"
                    alt=""
                  />
                  <span>{{ item.play }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SeekBar />
    </main>
    <SideBar />
  </div>
</template>
<script setup>
import { ref } from "vue";
import "../assets/style/scss/mainStyle.scss";
import "../assets/style/scss/style.scss";
import searchBar from "@/components/searchBar.vue";
import SeekBar from "@/components/SeekBar.vue";
import SideBar from "@/components/SideBar.vue";
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const specialList = computed(() => store.state.musics);
const newMusics = computed(() => store.state.musics);
const Favmusics = computed(() => store.state.musics);
const Historymusics = computed(() => store.state.musicHistoy);
let isActiveHistory = ref(false);
function showHistory() {
  isActiveFaw.value = false;
  isActiveHistory.value = true;
}
let isActiveFaw = ref(true);
function showFav() {
  isActiveFaw.value = true;
  isActiveHistory.value = false;
}
</script>
