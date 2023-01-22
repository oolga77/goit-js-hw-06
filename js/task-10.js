
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
