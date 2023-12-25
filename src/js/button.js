const elementsShowSwitcher = (elements, index) =>
  elements.forEach((el, i) => index <= i && el.classList.toggle('hidden'))

const textSwitcher = (elem, initText, text) =>
  elem.innerHTML === initText
    ? (elem.innerHTML = text)
    : (elem.innerHTML = initText)

function toggleReadMore() {
  const paragraph = document.querySelector('.about__paragraph')
  const button = document.querySelector('.about__button')

  if (paragraph.style.maxHeight) {
    paragraph.style.maxHeight = null
    button.innerHTML = 'Читать далее'
  } else {
    paragraph.style.maxHeight = paragraph.scrollHeight + 'px'
    button.innerHTML = 'Скрыть'
  }
}

const button = document.querySelector('.about__button')

export { elementsShowSwitcher, textSwitcher, toggleReadMore }
