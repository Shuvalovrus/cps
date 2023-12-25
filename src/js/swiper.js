const brandsSwiper = new Swiper('.brands__swiper', {
  init: false,
  spaceBetween: 15,
  slidesPerView: 1.25,
  loop: true,

  pagination: {
    el: '.swiper-brands__pagination'
  }
})
const typesSwiper = new Swiper('.types__swiper', {
  init: false,
  spaceBetween: 15,
  slidesPerView: 1.25,
  loop: true,

  pagination: {
    el: '.swiper-types__pagination'
  }
})
const pricesSwiper = new Swiper('.swiper-prices', {
  init: false,
  spaceBetween: 15,
  slidesPerView: 1.25,
  loop: true,

  pagination: {
    el: '.swiper-prices__pagination'
  }
})

const initSwiper = (swiper, callback) => callback(swiper)
const swipers = [brandsSwiper, typesSwiper, pricesSwiper]

export { swipers, initSwiper }
