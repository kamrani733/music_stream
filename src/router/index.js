import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/upload-song",
    name: "upload-song",
    component: () => import("../views/UploadSong.vue"),
  },
  {
    path: "/play-list",
    name: "play-list",
    component: () => import("../views/PlayList.vue"),
  },
  {
    path: "/admin-submit-info",
    name: "adminSubmitInfo",
    component: () => import("../views/AdminSubmitInfo.vue"),
  },
  {
    path: "/list-playlist",
    name: "list-playlist",
    component: () => import("../views/ListPlaylist.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginPage.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/RegisterPage.vue"),
  },
  {
    path: "/forgetPass",
    name: "forgetPass",
    component: () => import("../views/ForgetPass.vue"),
  },
  {
    path: "/music-details",
    name: "music-details",
    component: () => import("../views/MusicDetails.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () =>
      import(/* webpackChunkName: "404" */ "../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkExactActiveClass:"activeSlide"
});

export default router;
