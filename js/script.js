const tabButtons = document.querySelectorAll(".design-list__item");
const tabTitles = document.querySelectorAll(".design__title");

const changeContent = (arrayClass, value) => {
  const className = document.querySelectorAll(arrayClass);

  className.forEach((item) => {
    if (item.dataset.tabsField === value) {
      item.classList.remove("hidden");
    } else {
      item.classList.add("hidden");
    }
  });
};

tabButtons.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    const dataValue = item.dataset.tabsHandler;

    changeContent(".design__descr", dataValue);
    changeContent(".design-images", dataValue);
    changeContent(".design-block__img", dataValue);
    changeContent(".design__title", dataValue);

    tabButtons.forEach((item) => {
      if (item === e.target) {
        item.classList.add("design-list__item_active");
        document.title = "Притягивает взгляды";
      } else {
        item.classList.remove("design-list__item_active");
        document.title = "Портфолио";
      }
    });
  });
});
