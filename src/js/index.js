import '../scss/style.scss'
import { menuSwitcher } from './menu'
import { elementsShowSwitcher, textSwitcher, toggleReadMore } from './button'
import { switchModal } from './modal'
import { initSwiper, swipers } from './swiper'

const initialize = () => {
  const feedBackModalButton = document.querySelectorAll('.contacts__feedback')
  const feedBackModalCloseBtn = document.querySelector('.feedback-modal__close')
  const callModalCloseBtn = document.querySelector('.call-modal__close')
  const callModalButton = document.querySelectorAll('.contacts__call')
  const feedBackModal = document.querySelector('.feedback-modal')
  const callModal = document.querySelector('.call-modal')
  const page = document.querySelector('.page')
  const brands = document.querySelectorAll('.brands__swiper-slide')
  const types = document.querySelectorAll('.types__swiper-slide')
  const showMoreButtons = document.querySelectorAll('.swiper-button')
  const button = document.querySelector('.about__button')

  button.addEventListener('click', toggleReadMore)
  const toSwitchIndexBrands =
    window.innerWidth > 768 && window.innerWidth <= 1366 ? 6 : 8

  const toSwitchIndexTypes = toSwitchIndexBrands / 2

  elementsShowSwitcher(brands, toSwitchIndexBrands)
  elementsShowSwitcher(types, toSwitchIndexTypes)

  callModalButton.forEach((el) =>
    el.addEventListener('click', (event) => {
      switchModal(event, callModal)
    })
  )
  feedBackModalButton.forEach((el) =>
    el.addEventListener('click', (event) => {
      switchModal(event, feedBackModal)
    })
  )
  callModalCloseBtn.addEventListener('click', (event) =>
    switchModal(event, callModal)
  )
  feedBackModalCloseBtn.addEventListener('click', (event) =>
    switchModal(event, feedBackModal)
  )

  page.addEventListener('click', menuSwitcher)

  showMoreButtons.forEach((el) =>
    el.addEventListener('click', (event) => {
      const button = event.currentTarget
      const slides = Array.from(button.parentElement.children[0].children)

      let toSwitchIndex = button.classList.contains('swiper-brands__button')
        ? toSwitchIndexBrands
        : toSwitchIndexTypes

      elementsShowSwitcher(slides, toSwitchIndex)
      textSwitcher(button, 'Скрыть', 'Показать всё')
    })
  )

  swipers.forEach((el) =>
    initSwiper(el, () => window.innerWidth < 768 && el.init())
  )
}

initialize()
