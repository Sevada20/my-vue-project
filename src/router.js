import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "./pages/MainPage";
import PhotosPage from "./pages/PhotosPage";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: MainPage,
    },
    {
      path: "/photos",
      component: PhotosPage,
    },
  ],
});
