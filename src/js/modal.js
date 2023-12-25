const switchModal = (event, modal) => {
  const page = document.querySelector('.page')
  const menu = document.querySelector('.side-menu')

  if (!menu.classList.contains('side-menu--open'))
    page.classList.toggle('page--close')

  modal.classList.toggle('modal--active')
}

export { switchModal }
