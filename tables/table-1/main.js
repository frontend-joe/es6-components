const columns = document.querySelectorAll("table thead th");

const wrapper = document.querySelector(".wrapper");

let activeIndex;

const resize = (e) => {
  const nextWidth =
    e.clientX - columns[activeIndex].offsetLeft - wrapper.offsetLeft - 24;

  columns[activeIndex].width = nextWidth;
};

const stopResize = (e) => {
  document.body.style.cursor = "default";
  window.removeEventListener("mousemove", resize);
  window.removeEventListener("mouseup", stopResize);
};

const initResize = (index) => {
  activeIndex = index;
  document.body.style.cursor = "col-resize";
  window.addEventListener("mousemove", resize);
  window.addEventListener("mouseup", stopResize);
};
