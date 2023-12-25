const switchModal = (event, modal) => {
  const page = document.querySelector('.page')

  page.classList.toggle('page--close')
  modal.classList.toggle('modal--active')
}

export { switchModal }
