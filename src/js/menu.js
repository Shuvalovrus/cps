const menuSwitcher = (event) => {
  const menuButton = document.querySelector('.header__menu')
  const sideMenu = document.querySelector('.side-menu')
  const page = document.querySelector('.page')
  const target = event.target

  if (
    target === menuButton ||
    (target.classList.contains('page--close') &&
      sideMenu.classList.contains('side-menu--open'))
  ) {
    menuButton.classList.toggle('header__menu--open')
    page.classList.toggle('page--close')
    sideMenu.classList.toggle('side-menu--open')
  }
}

export { menuSwitcher }
