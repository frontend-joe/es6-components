const toggleMenu = () => {
  document.body.classList.toggle("open");
};

const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  speed: 750,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
