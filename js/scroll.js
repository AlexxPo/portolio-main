const links = document.querySelectorAll(".menu-list__link");
const btn = document.querySelector(".main__button");
const scrol = document.querySelector(".main__scroll");

const allLinks = [...links, btn, scrol];

allLinks.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();

    const id = item.getAttribute("href").substring(1);
    const section = document.getElementById(id);

    if (section) {
      seamless.scrollIntoView(section, {
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  });
});
