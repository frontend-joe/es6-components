const items = document.querySelectorAll(".accordion-item");

const resetItems = () => {
  items.forEach((item) => item.classList.remove("active"));
};

const handleClick = (element, index) => {
  resetItems();

  element.classList.add("active");

  localStorage.setItem("accordionIndex", index);
};

resetItems();

const activeItem = items[localStorage.getItem("accordionIndex")];

if (activeItem) {
  activeItem.classList.add("active");
} else {
  items[0].classList.add("active");
}
