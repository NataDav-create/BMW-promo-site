const menuElem = document.querySelector('.menu');
const hamburgerElem = document.querySelector('.humburger-menu');

const toggleMenu = () => {
  menuElem.classList.toggle('menu-active');
  hamburgerElem.classList.toggle('humburger-menu-active');
}

const closeMenu = () => {
  menuElem.classList.remove('menu-active');
  hamburgerElem.classList.remove('humburger-menu-active');
}

hamburgerElem.addEventListener('click', toggleMenu);
menuElem.addEventListener('click', e => {
  let target = e.target;
  if (target.matches('a[href^="#"]:not(a[href="#"])')) {
    closeMenu()
  }
})