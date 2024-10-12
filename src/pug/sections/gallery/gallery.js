import { Swiper } from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const slider = document.querySelector('.gallery-slider');

if (slider) {
  new Swiper(slider, {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: slider.querySelector('.swiper-button-next'),
      prevEl: slider.querySelector('.swiper-button-prev'),
    },
  });
}
