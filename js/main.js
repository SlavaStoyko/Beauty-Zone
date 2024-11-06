import {SendFormData} from "./SendFormData.js";
import { getScrollUp } from "./scroll/scroll.js";
import { openMassage, closeMassage } from "./procedures.js";
import { getMobileMenu } from "./mobileMenu/mobileMenu.js";
import { swiperBlock } from "./swiperBlock/swiperBlock.js";
window.addEventListener("DOMContentLoaded",function () {
  const scrollUp = document.getElementsByClassName("hero__callbackInfo__button");
  const card = document.querySelectorAll(".slider__item");
  scrollUp[0].onclick = (e) => getScrollUp(e);
  openMassage(card);
  closeMassage(card);
  getMobileMenu(".open-btn-menu", ".close-btn-menu", ".mobileMenu");
  swiperBlock(".swiper");
  SendFormData("params"); // the params is replaced by the url addressж
})






