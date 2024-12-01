const swiper = new Swiper(".swiper-container-h", {
  speed: 750,
  parallax: true,
  autoplay: false,
  mousewheel: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
