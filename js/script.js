const burgerMenu = document.querySelector(".burger__menu");
const burgerIcon = document.querySelector(".header__burger");
burgerIcon.addEventListener("click", function () {
  burgerIcon.classList.toggle("header__burger--active");
  burgerMenu.classList.toggle("burger__menu--active");
});
