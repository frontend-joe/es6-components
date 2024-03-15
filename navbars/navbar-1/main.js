const navbar = document.querySelector(".navbar");

let lastScrollTop = 0;

window.addEventListener(
  "scroll",
  () => {
    console.log("scroll");
    var { scrollY } = window;
    if (scrollY > lastScrollTop) {
      // downward scroll
      navbar.classList.remove("visible");
    } else if (scrollY < lastScrollTop) {
      // upward scroll
      navbar.classList.add("visible");
    } // else was horizontal scroll
    lastScrollTop = scrollY <= 0 ? 0 : scrollY;
  },
  { passive: true }
);
