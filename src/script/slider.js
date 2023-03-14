// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

const swiper = document.querySelector(".album__slider");
const swiperWrapper = document.querySelector(".album__list");
const swiperList = document.querySelectorAll(".album__item");

swiper.classList.add("swiper");
swiperWrapper.classList.add("swiper-wrapper");
const addClassSwiperItems = () => {
  for (let i = 0; i < swiperList.length; i++) {
    swiperList[i].classList.add("swiper-slide");
  }
};
addClassSwiperItems();

new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: ".album__right",
    prevEl: ".album__left",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});
