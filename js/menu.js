const burger = document.querySelector(".humburger-menu");
const menu = document.querySelector(".menu");
const menuLinks = menu.querySelectorAll(".menu-list__link");

burger.addEventListener("click", () => {
  menu.classList.toggle("menu-active");
});
menuLinks.forEach((item) => {
  item.addEventListener("click", () => {
    menu.classList.remove("menu-active");
  });
});

document.addEventListener("click", (e) => {
  const target = e.target;
  if (target.closest(".menu") || target.closest(".humburger-menu")) {
  } else {
    menu.classList.remove("menu-active");
  }
});
