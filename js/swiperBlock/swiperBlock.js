export const swiperBlock = (blockSW) =>{
    new Swiper(blockSW, {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  slidesPerView: 3,
  spaceBetween: 16,
  // Navigation arrows
  navigation: {
    nextEl: ".nav-forvard",
    prevEl: ".nav-back",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  breakpoints: {
    // when window width is >= 320px
    0: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    // when window width is >= 480px
    860: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    // when window width is >= 640px
    1280: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
  },
});
}