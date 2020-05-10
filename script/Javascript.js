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
