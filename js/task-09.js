// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  bodyEl:document.querySelector('body'),
  btnChangeColor: document.querySelector('.change-color'),
  textColor: document.querySelector('.color')
}



refs.btnChangeColor.addEventListener('click', () => {
  refs.bodyEl.style.backgroundColor = getRandomHexColor();
  refs.textColor.textContent = refs.bodyEl.style.backgroundColor; 
}
)

