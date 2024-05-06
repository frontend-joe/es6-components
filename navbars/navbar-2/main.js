const menuContent = document.querySelector("#menuContent");

const menuButtons = document.querySelectorAll(".menu-buttons button");

const menuHeight = getComputedStyle(document.documentElement).getPropertyValue(
  "--menu-height"
);

const toggleMenuOpen = (value) => {
  document.body.classList.toggle("open", value);
};

const toggleMenuBlock = (event, index) => {
  menuButtons.forEach((button) => button.classList.remove("active"));
  event.classList.toggle("active");
  menuContent.style.translate = `0 calc(0px - ${menuHeight} * ${index})`;
};
