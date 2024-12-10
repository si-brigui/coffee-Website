// Responsive menu toggle
const menuOpenButton = document.querySelector("#menu-open-button");
const navMenu = document.querySelector(".nav-menu");

menuOpenButton.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

const swiper = new swiper(".slider-container", {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
