let menuOptions = Array.from(document.querySelectorAll('.navigation__item'));

let setName = (title) => {
  let sidebarWidth = document.querySelector('.side__bar').style.width;
  document.querySelector('.tab__name-text').innerHTML = title;
  let controlMenu = document.querySelector('.control__menu');
  controlMenu.classList.toggle('control__menu-closed');
  document.querySelector('.map__holder').style.width = `calc(100vw - ${sidebarWidth})`;
}

menuOptions.map (item => {
  let title = item.querySelector('.nav__text').textContent;
  console.log(title)
  item.addEventListener('click', () => setName(title))
});
