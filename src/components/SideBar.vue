<template>
  <aside class="sidebar">
    <div class="sidebar__logo">
      <img src="../assets/image/logo.png" alt="Logo" />
    </div>
    <div class="sidebar__list">
      <ul class="sidebar_menu">
        <li class="sidebar__li">
          <router-link to="/">
            صفحه اصلی
            <img
              class="sidebar__icon"
              src="../assets/image/icons/linear/home-2.png"
              alt=""
          /></router-link>
        </li>
        <li @click="activ_btn" class="sidebar__li">
          <router-link to="/upload-song"
            >آپلود
            <img
              class="sidebar__icon"
              src="../assets/image/icons/linear/discover.png"
              alt=""
          /></router-link>
        </li>
        <li class="sidebar__li">
          <router-link to="/list-playlist"
            >لیست پلی لیست
            <img
              class="sidebar__icon"
              src="../assets/image/icons/linear/home-2.png"
              alt=""
          /></router-link>
        </li>
        <li class="sidebar__li">
          <router-link to="/music-details"
            >جزئیات آهنگ
            <img
              class="sidebar__icon"
              src="../assets/image/icons/linear/play.png"
              alt=""
          /></router-link>
        </li>
        <li class="sidebar__li">
          <router-link to="/play-list">
            لیست پخش منتخب
            <img
              class="sidebar__icon"
              src="../assets/image/icons/linear/receipt-square.png"
              alt=""
          /></router-link>
        </li>
        <li class="sidebar__li activ">
          <router-link to="/admin-submit-info">
            آپلود آهنگ<img
              class="sidebar__icon active"
              src="../assets/image/icons/Bold/import.png"
              alt=""
          /></router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>
