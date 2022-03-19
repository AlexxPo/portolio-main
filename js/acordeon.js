const accordeon = document.querySelector(".feature-list");
const accordeonButtons = document.querySelectorAll(".feature__link");
accordeonButtons.forEach((item) => {
  item.addEventListener("click", () => {
    accordeonButtons.forEach((item) => {
      item.classList.remove("feature__link_active");
      item.nextElementSibling.classList.add("hidden");
    });
  });
  item.addEventListener("click", () => {
    item.classList.toggle("feature__link_active");
    item.nextElementSibling.classList.toggle("hidden");
  });
});
