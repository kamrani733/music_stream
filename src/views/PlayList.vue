<template>
  <div class="outer-container">
    <main class="content">
      <topMain />
      <div class="banner">
        <div class="banner__wrapper">
          <div class="banner__information">
            <div class="badge">لیست پخش</div>
            <h3>گلچین شاد مجلسی آخر هفته ها</h3>

            <div class="banner__details">
              <div class="music_count_wrapper">
                <img
                  class="music_count_icon"
                  src="../assets/image/icons/linear/music-filter.png"
                  alt=""
                />
                <p class="music_count_p">۱۲۰ ترانه</p>
              </div>

              <div class="seperator_line"></div>

              <div class="music_time_wrapper">
                <img
                  class="music_time_icon"
                  src="../assets/image/icons/linear/clock.png"
                  alt=""
                />
                <p class="music_time_p">۶ ساعت و ۴۰ دقیقه و ۲۱ ثانیه</p>
              </div>
            </div>

            <div class="banner_play">
              <img
                class="banner__play_icon"
                src="../assets/image/icons/Bold/play_baaner.png"
                alt=""
              />
            </div>
          </div>

          <img
            class="banner__pic"
            src="../assets/image/pic/batel_cover.png"
            alt=""
          />

          <!-- <img style="width:100% ;" src="../assets/image/pic/banner.png" alt=""> -->
          <!-- </div> -->
        </div>
      </div>
      <div class="playlist_div">
        <div class="playlist_head">
          <div class="music_number_head">#</div>
          <div class="music_title_head">عنوان</div>
          <div class="music_album_head">آلبوم</div>
          <div class="">تاریخ انتشار</div>
        </div>

        <div v-for="item in playlist" :key="item.id" class="playlist_row">
          <div class="music_number">۰۱</div>

          <div class="music_title_wrapper">
            <img
              class="music_cover"
              :src="require(`@/assets/image/pic/${item.img}`)"
              alt=""
            />
            <div class="details_wrapper">
              <p>{{ item.tittle }}</p>
              <p class="music_singer">{{ item.singer }}</p>
            </div>
          </div>

          <div class="music_album">{{ item.album }}</div>
          <div class="music_release_date">{{ item.release }}</div>

          <div class="music_duration">{{ item.time }}</div>
          <label class="music_like">
            <input class="music_like_radio" type="checkbox" />
            <span></span>
          </label>
          <div class="music_more_opt">
            <img src="../assets/image/icons/linear/more.png" alt="" />
          </div>
        </div>

        <!-- <div class="playlist_row active">
          <div class="music_number">
            <img
              class="equalize"
              src="../assets/image/icons/linear/equalize.png"
              alt=""
            />
          </div>
          <label class="music_title_wrapper">
            <input type="checkbox" />
            <span class="music_title_wrapper-playMusic">
              <img
                class="music_cover"
                src="../assets/image/pic/dastband_cover.png"
                alt=""
              />
            </span>
            <div class="details_wrapper">
              <p>دستبند</p>
              <p class="music_singer">رهام</p>
            </div>
          </label>

          <div class="music_album">دربند</div>
          <div class="music_release_date">۲۵ روز پیش</div>

          <div class="music_duration">۰۴:۴۲</div>
          <label class="music_like">
            <input class="music_like_radio" type="checkbox" />
            <span></span>
          </label>
          <div class="music_more_opt">
            <img src="../assets/image/icons/linear/more.png" alt="" />
          </div>
        </div> -->
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
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const playlist = computed(() => store.state.musics);
</script>
