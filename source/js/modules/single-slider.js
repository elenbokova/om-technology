import '../vendor/swiper.js';

let swiper;

const initSingleSlider = () => {

  swiper = new window.Swiper('.swiper', {

    loop: true,
    // watchOverflow: true,
    allowTouchMove: true,
    slidesPerView: 3,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
    },

    // navigation: {
    //   nextEl: '.feedback__button-next',
    //   prevEl: '.feedback__button-prev',
    // },
  });
};

export {swiper, initSingleSlider};
