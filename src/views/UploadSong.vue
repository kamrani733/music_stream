<template>
  <div class="outer-container">
    <main class="content">
      <topMain />
      <div class="container">
        <div class="breadcrumb">
          <div class="breabreadcrum__step2">ذخیره اطلاعات</div>
          <div class="breabreadcrum__arrow_icon_left">
            <img src="../assets/image/icons/linear/Seperator.png" alt="" />
          </div>
          <div class="breabreadcrum__step1">بارگذاری آهنگ</div>
        </div>
        <div class="upload">
          <div class="upload__tittle">بارگذاری آهنگ</div>
          <div class="upload__browse">
            <div class="upload__browse-inside">
              <div class="upload__browse_detail">
                <div class="uplad_browse__tittle">
                  کلیک کنید یا آهنگ خود را در این قسمت رها کنید
                </div>
                <div class="button button-cansel upload__song_btn">
                  <input type="file" class="customfile__input opacity-0" /><span
                    class="select_file__text"
                    >آپلود آهنگ</span
                  >
                </div>
              </div>
            </div>
            <div class="upload__browse-describe">
              <span class="describe__p">
                لورم ایپسورم و دیگر توضیحات اضافه که شاید نیاز داشته باشید
              </span>
              <img
                class="describe__icon"
                src="../assets/image/icons/Bold/info-circle.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <!-- <SeekBar /> -->
    </main>
    <SideBar />
  </div>
</template>
<script setup>
import "../assets/style/scss/style.scss";
import topMain from "@/components/topMain.vue";
// import SeekBar from "@/components/SeekBar.vue";
import SideBar from "@/components/SideBar.vue";
</script>
