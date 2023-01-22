// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const refs = {
  createButton:document.querySelector('[data-create]'),
  markupConteiner:document.querySelector('#boxes'),
  inputValue:document.querySelector('input'),
  destroyButton:document.querySelector('[data-destroy]')
}
refs.createButton.addEventListener('click', (onCreateButtonClick));
refs.destroyButton.addEventListener('click', (onDestroyButtonClick))

function onCreateButtonClick() {
createBoxes(refs.inputValue.value);
}

function onDestroyButtonClick() {
  refs.markupConteiner.innerHTML = '';
  refs.inputValue.value = '';
}

function createBoxes(amount){
  let sizes = 30;
  const elements = [];
  for (let index = 0; index < amount; index += 1) {
    const div = document.createElement('div');
    div.style.width = `${sizes}px`;
    div.style.height = `${sizes}px`;
    
    div.style.backgroundColor = getRandomHexColor();
    sizes += 10;
    elements.push(div)
  }
refs.markupConteiner.append(...elements)
}
