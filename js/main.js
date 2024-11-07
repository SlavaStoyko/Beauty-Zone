import { SendFormData } from "./SendFormData.js";
import { getScrollUp } from "./scroll/scroll.js";
import { openMassage} from "./procedures.js";
import { getMobileMenu } from "./mobileMenu/mobileMenu.js";
import { swiperBlock } from "./swiperBlock/swiperBlock.js";
window.addEventListener("DOMContentLoaded", function () {
  const scrollUp = document.getElementsByClassName(
    "hero__callbackInfo__button"
  );
  const card = document.querySelectorAll(".slider__item > a");
  scrollUp[0].onclick = (e) => getScrollUp(e);
   openMassage(card);
  getMobileMenu(".open-btn-menu", ".close-btn-menu", ".mobileMenu");
  swiperBlock(".swiper");
  SendFormData("params"); // the params is replaced by the url address

});
