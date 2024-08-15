const burgerMenu = document.querySelector(".burger__menu");
const burgerIcon = document.querySelector(".header__burger");
const sliderItem = document.querySelectorAll(".favorite-slider__item");
const btnPrev = document.querySelector(".switches-btn__prev");
const btnNext = document.querySelector(".switches-btn__next");
const tabs = document.querySelectorAll(".tab");

//burger
burgerIcon.addEventListener("click", function () {
  burgerIcon.classList.toggle("header__burger--active");
  burgerMenu.classList.toggle("burger__menu--active");
});

//slider
let currentSlide = 0;
function showslides() {
  sliderItem[currentSlide].classList.add("favorite-slider__item--active");
  tabs[currentSlide].classList.add("tab--active");
}
function hideSlides() {
  sliderItem[currentSlide].classList.remove("favorite-slider__item--active");
  tabs[currentSlide].classList.remove("tab--active");
}
btnPrev.addEventListener("click", function () {
  hideSlides();
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = sliderItem.length - 1;
  }
  showslides();
});

btnNext.addEventListener("click", function () {
  hideSlides();
  currentSlide++;
  if (currentSlide > sliderItem.length - 1) {
    currentSlide = 0;
  }
  showslides();
});

tabs.forEach((tab, index) => {
  tab.addEventListener("click", function () {
    hideSlides();
    currentSlide = index;
    showslides();
  });
});
