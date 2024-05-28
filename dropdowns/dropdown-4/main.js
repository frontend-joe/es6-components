const button = document.getElementById("button");
const buttonRect = button.getBoundingClientRect();
const chevron = document.getElementById("chevron");
const chevronRect = chevron.getBoundingClientRect();
const menuRight = buttonRect.right - chevronRect.right + 6;
const menuTop = chevronRect.top - buttonRect.top + 6;
const dropdown = document.getElementById("dropdown");

const menu = document.getElementById("menu");
menu.style.top = `${menuTop}px`;
menu.style.right = `${menuRight}px`;

const handleDropdownClicked = (event) => {
  event.stopPropagation();
  toggleDropdown(true);
};

const toggleDropdown = (shouldOpen) => {
  if (dropdown.classList.contains("open")) {
    menu.style.top = `${menuTop}px`;
    menu.style.right = `${menuRight}px`;
  } else {
    menu.style.top = `${button.clientHeight}px`;
    menu.style.right = 0;
  }

  dropdown.classList.toggle("open");
};

document.body.addEventListener("click", () => {
  if (dropdown.classList.contains("open")) {
    toggleDropdown(false);
  }
});
