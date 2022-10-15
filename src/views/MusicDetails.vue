<template>
  <div class="outer-container">
    <main class="content">
      <topMain />
      <div v-if="modalCreatePlayList" class="moodal__edit_playlist_back">
        <div class="moodal__select_playlist">
          <div class="moodal__select_playlist__buttons">
            <div @click="closeModal" class="playlist__close">x</div>
            <div class="moodal__select_playlist__buttons__action">
              <div @click="showCreatePlaylist" class="playlist__create">
                ایجاد لیست پخش
              </div>
              <div @click="showSelectPlaylist" class="playlist__edit">
                انتخاب لیست پخش
              </div>
            </div>
          </div>
          <div class="moodal__select_playlist__name">
            <div class="music__name__tittle">نام لیست پخش</div>
            <div class="music__name__select__name">
              <input type="text" class="music__name__input" autofocus />
              <div class="music__name__button">ذخیره</div>
            </div>
            <div class="music__selcted">
              <img
                class="music_cover"
                src="/img/dastband_cover.53980cc2.png"
                alt=""
              />
              <div class="details_wrapper">
                <span class="music__name">{{ musicname }}</span
                ><br />
                <span class="music_singer">{{ singer }}</span>
              </div>
            </div>
            <div class="music__similar">
              <div class="music__similar__tittle">آهنگ های مشابه</div>
              <div class="music__similar__musics">
                <div
                  class="music__similar__music"
                  v-for="item in music"
                  :key="item.id"
                >
                  <img
                    class="music_cover"
                    :src="require(`@/assets/image/pic/${item.img}`)"
                    alt=""
                  />
                  <div class="details_wrapper">
                    <span class="music__name">{{ item.tittle }}</span
                    ><br />
                    <span class="music_singer">{{ item.singer }}</span>
                  </div>
                  <div class="playlist__add">اضافه کردن به لیست پخش</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="modalSelectPlaylist" class="moodal__edit_playlist_back">
        <div class="moodal__create_playlist">
          <div class="moodal__create_playlist__buttons">
            <div @click="closeModal" class="playlist__close">x</div>
            <div class="moodal__create_playlist__buttons__action">
              <div @click="showCreatePlaylist" class="playlist__create">
                ایجاد لیست پخش
              </div>
              <div @click="showSelectPlaylist" class="playlist__edit">
                انتخاب لیست پخش
              </div>
            </div>
          </div>
          <div class="moodal__create_playlist__name">
            <div class="music__name__tittle">فیلتر لیست پخش</div>
            <div class="music__name__select__name">
              <input type="text" class="music__name__input" autofocus />
            </div>
            <div class="music__similar">
              <div class="music__similar__tittle">لیست های پخش</div>
              <div class="music__similar__musics">
                <div
                  v-for="item in playlists"
                  :key="item.id"
                  class="music__similar__music"
                >
                  <img
                    class="music_cover"
                    :src="require(`@/assets/image/pic/${item.img}`)"
                    alt=""
                  />
                  <div class="details_wrapper">
                    <span class="music__name">{{ item.tittle }}</span
                    ><br />
                    <span class="music_singer">{{ item.count }}</span>
                  </div>
                  <div class="playlist__add">اضافه کردن به لیست پخش</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="modal__editSong" class="moodal__edit_playlist_music">
        <div class="song_info-inside">
          <div class="song_info">
            <div class="song_info-inside">
              <div class="song_info__details">
                <div class="col">
                  <div class="detail__lable">نام آهنگ</div>
                  <input
                    class="detaile__input"
                    placeholder="اشارات"
                    type="text"
                  />
                  <div class="detail__lable">نام آلبوم</div>
                  <input
                    class="detaile__input"
                    placeholder="اشارات"
                    type="text"
                  />
                </div>
                <div class="col">
                  <div class="detail__lable">نام خواننده</div>
                  <input
                    class="detaile__input"
                    placeholder="محمدرضا شجریان"
                    type="text"
                  />
                  <div class="detail__lable">مدت زمان آهنگ</div>
                  <input
                    class="detaile__input"
                    placeholder="۰۹:۰۰"
                    type="text"
                  />
                </div>
                <div class="col position-relative">
                  <img
                    class="detaile__cover"
                    src="/img/cover.69d0f25f.png"
                    alt=""
                  />
                  <div class="detaile__file_back">
                    <div class="detaile__file">
                      <input type="file" class="customfile__input" /><img
                        class="customfile__icon"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFVSURBVHgB7VTRUcMwDFW4/pMN8AgZISOwAccE0AkaJmg2CExQmCBlgrJBygRhA/N0eW3dnh076W/f3Ts7lqwnObJFbrgW1toV2IG9PUHnO3Ad27+IBNcAr+An+Av+0ZSDD2qDj2RZtpQZmRtmW4/41PQxMiHo2jmSbmwzbDl9LI+sCfoz+CHwhtmZxKRq7rHBpKjeJZd7LlBxNEyw9TmqoQkEydlNLfmia7RVzLzit1bT+4IcnTwZds45t85R5G4FruAUgYa20lkrRvzPBO4kjgL8Qq9vDwuY/8hwN55im1ME9Kx7mYkUgT346HYX51rZNrZ5IXE8gztQf+4HxnsVlKGyN0kF27QO2IzTPZbzIuAbbNOWIrnMhD09Hd6LVjK7jZ14m53gDWMcq8sunCoMKxmeZW3FvaRBqy45LtHGtVeAIgZDJcN7byQNmtA3+M47ckM6/gHBBrQDuKQnGAAAAABJRU5ErkJggg=="
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="song_info-lyrics">
                <div class="lyrics_tittle">متن آهنگ</div>
                <div class="lyrics__text">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                  آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم
                  افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
                  صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                  راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل
                  حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای
                  موجود طراحی اساسا مورد استفاده قرار گیرد.
                </div>
              </div>
              <div class="song_info-buttons">
                <div @click="editSong" class="button button-cansel">لغو</div>
                <div @click="editSong" class="button button-save">
                  دخیره اطلاعات
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="modalDeleteSong" class="modal_delete__music">
        <div class="modal_delete__music__body">
          <p>آیا از حذف این آهنگ اطمینان دارید؟</p>
          <div class="music__delete__btn">
            <div @click="deleteSong" class="modal_delete__music__delete">
              حذف
            </div>
            <div @click="deleteSong" class="modal_delete__music__cansel">
              لغو
            </div>
          </div>
        </div>
      </div>
      <div class="baner">
        <div class="banner__cover">
          <img
            class="banner__pic"
            src="../assets/image/pic/batel_cover.png"
            alt=""
          />
          <img
            class="banner__play_icon"
            src="../assets/image/icons/Bold/play_baaner.png"
            alt=""
          />
        </div>
        <div class="banner__info">
          <h2>{{ musicname }}</h2>
          <div class="banner__info__icons">
            <img
              class="banner__pic"
              src="../assets/image/icons/linear/frame2.png"
              alt=""
            />
            <span>{{ singer }}</span>
            <span class="line"></span>
            <img
              class="banner__pic"
              src="../assets/image/icons/linear/clock.png"
              alt=""
            />
            <span>۲:۳۸</span>
          </div>
          <div class="banner__info__icons_line2">
            <div class="banner__music__like">
              <label class="music_like">
                <input class="music_like_radio" type="checkbox" />
                <span></span>
              </label>
            </div>
            <div class="banner__music__share">
              <img
                class="banner__pic"
                src="../assets/image/icons/linear/share.png"
                alt=""
              />
            </div>
            <div class="banner__music__more">
              <div v-if="isActive" class="music_detail__modal">
                <div
                  @click="showCreatePlaylist"
                  class="music_detail__modal__add"
                >
                  <img
                    src="../assets/image/icons/linear/music-filter.png"
                    alt=""
                  />

                  <span>اضافه کردن به لیست پخش</span>
                </div>
                <div @click="editSong" class="music_detail__modal__edit">
                  <img src="../assets/image/icons/linear/edit.png" alt="" />
                  <span>ویرایش آهنگ</span>
                </div>
                <div @click="deleteSong" class="music_detail__modal__delete">
                  <img
                    src="../assets/image/icons/linear/trash.png"
                    alt=""
                  /><span>حذف آهنگ </span>
                </div>
              </div>
              <img
                @click="showModal"
                src="../assets/image/icons/linear/more.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="banner__lyrics">
          <div class="banner__lyrics__text">
            اون که با خودخواهیاش این عشقو باطل کرد بهم بگو تو بودی یا من اون که
            پامونو رفیق موج و ساحل کرد خودت بگو تو بودی یا من تو کجایی که الآن
            دریا دلش تنگه ببینه ما دو تا رو با هم اون که با خودخواهیاش این عشقو
            باطل کرد بهم بگو تو بودی یا من اون که پامونو رفیق موج و ساحل کرد
            خودت بگو تو بودی یا من تو کجایی که الآن دریا دلش تنگه ببینه ما دو تا
            رو با هم
            <span v-if="isActiveLyrics">
              اون که با خودخواهیاش این عشقو باطل کرد بهم بگو تو بودی یا من اون
              که پامونو رفیق موج و ساحل کرد خودت بگو تو بودی یا من تو کجایی که
              الآن دریا دلش تنگه ببینه ما دو تا رو با هم اون که با خودخواهیاش
              این عشقو باطل کرد بهم بگو تو بودی یا من اون کاون که با خودخواهیاش
              این عشقو باطل کرد بهم بگو تو بودی یا من اون که پامونو رفیق موج و
              ساحل کرد خودت بگو تو بودی یا من تو کجایی که الآن دریا دلش تنگه
              ببینه ما دو تا رو با هم اون که با خودخواهیاش این عشقو باطل کرد بهم
              بگو تو بودی یا من اون که پامونو رفیق موج و ساحل کرد خودت بگو تو
              بودی یا من تو کجایی که الآن دریا دلش تنگه ببینه ما دو تا رو با هم
            </span>
          </div>
          <div
            v-if="!isActiveLyrics"
            @click="showMore"
            class="banner__lyrics__loadMore"
          >
            <span> مشاهده بیشتر</span>
            <img
              src="../assets/image/icons/linear/arrow-down-orange.png"
              alt=""
            />
          </div>

          <div
            v-if="isActiveLyrics"
            @click="showMore"
            class="banner__lyrics__loadMore readLess"
          >
            <span> مشاهده کمتر</span>
            <img
              src="../assets/image/icons/linear/arrow-down-orange.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <CarouselView />
      <SeekBar />
    </main>
    <SideBar />
  </div>
</template>
<script setup>
import { ref } from "vue";
import "../assets/style/scss/style.scss";
import "../assets/style/scss/musicDetails.scss";
import topMain from "@/components/topMain.vue";
import SeekBar from "@/components/SeekBar.vue";
import SideBar from "@/components/SideBar.vue";
import CarouselView from "@/components/CarouselView.vue";
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const music = computed(() => store.state.musics);
const playlists = computed(() => store.state.playlists);

let isActive = ref(false);
function showModal() {
  isActive.value = !isActive.value;
}

let isActiveLyrics = ref(false);
function showMore() {
  isActiveLyrics.value = !isActiveLyrics.value;
}

let modalSelectPlaylist = ref(false);
let modalCreatePlayList = ref(false);

function showCreatePlaylist() {
  isActive.value = false;
  modalCreatePlayList.value = true;
  modalSelectPlaylist.value = false;
}

function showSelectPlaylist() {
  isActive.value = false;
  modalCreatePlayList.value = false;
  modalSelectPlaylist.value = true;
}

function closeModal() {
  isActive.value = false;
  modalCreatePlayList.value = false;
  modalSelectPlaylist.value = false;
}

let modal__editSong = ref(false);
function editSong() {
  isActive.value = false;
  modal__editSong.value = !modal__editSong.value;
}
let modalDeleteSong = ref(false);
function deleteSong() {
  isActive.value = false;
  modalDeleteSong.value = !modalDeleteSong.value;
}
const musicname = "باطل";
const singer = "شادمهر عقیلی";


</script>
