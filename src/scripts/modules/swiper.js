
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const mainSliders = document.querySelectorAll('.main-slider');

if (mainSliders.length) {
  mainSliders.forEach((slider) => {
    const pagination = slider.querySelector('.main-slider-pagination');

    new Swiper(slider, {
      modules: [Navigation, Pagination],
      slidesPerView: 'auto',
      spaceBetween: 10,

      pagination: {
        el: pagination ? pagination : null,
        dynamicBullets: false,
        clickable: true,
      },

      navigation: {
        nextEl: slider.querySelector('.main-slider-button-next'),
        prevEl: slider.querySelector('.main-slider-button-prev'),
      },

      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },

        1024: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
      },
    });
  });
}
