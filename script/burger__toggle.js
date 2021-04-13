let burger = document.querySelector('.burger');

let toggleBurger = () => {

  let lines = Array.from(document.querySelectorAll('.line'));

  lines.forEach((line, index) => line.classList.toggle(`line__${index + 1}`));
  document.querySelector('.small__menu').classList.toggle('fade')

  document.querySelector('.navigation__list').classList.toggle('navigation__list-small');
  Array.from(document.querySelectorAll('.nav__text'))
  .forEach(item => item.classList.toggle('text__small'));
}
burger.addEventListener('click', toggleBurger);
