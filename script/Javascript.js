window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
const navSlie = () => {
  const burder = document.querySelector(".header__nav__responsive");
  const nav = document.querySelector(".header__nav");
  const header = document.querySelector(".header");

  burder.addEventListener("click", () => {
    nav.classList.toggle("header__nav__active");
    header.style.background =
      header.style.background === "black" ? "" : "black";
  });
};
navSlie();

const reserve = () => {
  const reserveBtn = document.querySelector(".header__nav-link_h");
  const middleBtn = document.querySelector(".intro__middle_btn");
  const reserveField = document.querySelector(".reserve");
  const reserveCloseBtn = document.querySelector(".reserve__content__closeBtn");
  const bodySelected = document.querySelector("body");
  const reserveContent = document.querySelector(".reserve__content");

  reserveBtn.onclick = () => {
    reserveField.style.display = "block";
    bodySelected.style.overflow = "hidden";
  };
  middleBtn.onclick = () => {
    reserveField.style.display = "block";
    bodySelected.style.overflow = "hidden";
  };

  reserveCloseBtn.onclick = () => {
    reserveField.style.display = "none";
    bodySelected.style.overflow = "visible";
  };

  window.onclick = (event) => {
    if (event.target == reserveField) {
      reserveField.style.display = "none";
      bodySelected.style.overflow = "visible";
    }
  };
};
reserve();
