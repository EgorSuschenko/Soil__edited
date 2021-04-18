let menuOptions = Array.from(document.querySelectorAll('.navigation__item'));
const tabWindow = document.querySelector('.tab__window')


let addNote = (e) => {
  e.preventDefault();
  let input = e.target.querySelector('input')
  console.log(input.value);
  let div = document.createElement('div');
  div.classList.add(`note`, `${1}`);
  div.innerHTML = `<p class="note__title"> ${input.value}</p>`;
  console.log(div);
  tabWindow.appendChild(div);
  input.value = '';
}

const form = `
  <form>
    <input id="note" class="input__notes" type="text" placeholder="Ваши заметки">
    <button class="add__note" for="note" type="submit">Добавить запись</button>
  </form>
`;

const btnAddField = `
  <button class="field__btn">Нарисовать поле</button>
`;

let setName = (title) => {
  tabWindow.innerHTML = '';

  document.querySelector('.back__btn').classList.remove('back__btn-closed')
  let sidebarWidth = document.querySelector('.side__bar').style.width;
  document.querySelector('.tab__name-text').innerHTML = title;
  let controlMenu = document.querySelector('.control__menu');
  controlMenu.classList.remove('control__menu-closed');
  document.querySelector('.map__holder').style.width = `calc(100vw - ${sidebarWidth})`;
  if(title === 'Заметки'){
    tabWindow.innerHTML = form;
    tabWindow.querySelector('form').addEventListener('submit', addNote);
  }
  // if(title === 'Поля') {
  //   tabWindow.innerHTML = btnAddField;
  // }
}

let closeTab = (e) => {
  let controlMenu = document.querySelector('.control__menu');
  controlMenu.classList.add('control__menu-closed');
  document.querySelector('.back__btn').classList.add('back__btn-closed');
  tabWindow.innerHTML = '';
};

document.querySelector('.back__btn').addEventListener('click', closeTab)


menuOptions.map (item => {
  let title = item.querySelector('.nav__text').textContent;
  console.log(title)
  item.addEventListener('click', () => setName(title))
});
