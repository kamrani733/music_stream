<template>
  <div class="arttist_part">
    <div class="artist_musics">
      <div class="artist_musics__tittle">محبوب‌ترین‌ها از همین خواننده</div>
    </div>
  </div>
  <div class="carousel">
    <div class="carousel-inner">
      <input
        class="carousel-open"
        type="radio"
        id="carousel-1"
        name="carousel"
        aria-hidden="true"
        hidden=""
        checked="checked"
      />
      <div class="carousel-item">
        <div v-for="item in musics" :key="item.id" class="banner__pic">
          <img :src="require(`@/assets/image/pic/${item.img}`)" alt="" />
          <div class="carousel-item__text">{{ item.tittle }}</div>
          <div class="carousel-item__more">
            <img
              src="../assets/image/icons/linear/more.png"
              class="moreBtn"
              alt=""
            />
          </div>
        </div>
      </div>
      <input
        class="carousel-open"
        type="radio"
        id="carousel-2"
        name="carousel"
        aria-hidden="true"
        hidden=""
      />
      <div class="carousel-item">
        <div v-for="item in musics" :key="item.id" class="banner__pic">
          <img :src="require(`@/assets/image/pic/${item.img}`)" alt="" />
          <div class="carousel-item__text">{{ item.tittle }}</div>
          <div class="carousel-item__more">
            <img
              src="../assets/image/icons/linear/more.png"
              class="moreBtn"
              alt=""
            />
          </div>
        </div>
      </div>
      <input
        class="carousel-open"
        type="radio"
        id="carousel-3"
        name="carousel"
        aria-hidden="true"
        hidden=""
      />
      <div class="carousel-item">
        <div v-for="item in musics" :key="item.id" class="banner__pic">
          <img :src="require(`@/assets/image/pic/${item.img}`)" alt="" />
          <div class="carousel-item__text">{{ item.tittle }}</div>
          <div class="carousel-item__more">
            <img
              src="../assets/image/icons/linear/more.png"
              class="moreBtn"
              alt=""
            />
          </div>
        </div>
      </div>
      <label for="carousel-3" class="carousel-control prev control-1">‹</label>
      <label for="carousel-2" class="carousel-control next control-1">›</label>
      <label for="carousel-1" class="carousel-control prev control-2">‹</label>
      <label for="carousel-3" class="carousel-control next control-2">›</label>
      <label for="carousel-2" class="carousel-control prev control-3">‹</label>
      <label for="carousel-1" class="carousel-control next control-3">›</label>
    </div>
  </div>
</template>
<script setup>
const musics = [
  {
    id: 0,
    tittle: "غیرمعمولی",
    img: "shadmehr4.png",
  },
  {
    id: 1,
    tittle: "علاقه ",
    img: "shadmehr5.png",
  },
  {
    id: 2,
    tittle: "  خاص",
    img: "shadmehr3.png",
  },
  {
    id: 3,
    tittle: "تماشا",
    img: "shadmehr2.png",
  },
  {
    id: 4,
    tittle: "قاصدک",
    img: "shadmehr1.png",
  },
];
</script>
