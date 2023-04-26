// 首页使用的js

// 引入公共css
import "../common/reset.css";
import "./index.less";
import "@/assets/global.less";

// 引入页面公共部分的js
import "../common/header";
import "../common/footer";

import Swiper from "swiper";

const proSwiper = new Swiper(".product-swiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  // loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
