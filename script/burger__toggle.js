let burger = document.querySelector('.burger');

let toggleBurger = () => {

  let lines = Array.from(document.querySelectorAll('.line'));

  lines.forEach((line, index) => line.classList.toggle(`line__${index + 1}`));
  document.querySelector('.small__menu').classList.toggle('fade')

  document.querySelector('.navigation__list').classList.toggle('navigation__list-small');
  Array.from(document.querySelectorAll('.nav__text'))
  .forEach(item => item.classList.toggle('text__small'));

  document.querySelector('.field__btn__add').classList.toggle('display__none');
  document.querySelector('.field__btn__done').classList.toggle('display__none');
  document.querySelector('.field__btn__delete').classList.toggle('display__none');
}
burger.addEventListener('click', toggleBurger);
