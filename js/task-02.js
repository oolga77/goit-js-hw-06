const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListRef = document.getElementById("ingredients")
function createItemsMarkup(ingredients) {
  return ingredients.map((ingredient) => {
    const li = document.createElement('li');
    li.textContent = ingredient;
    li.classList.add('item');
    return li;
  })
}

ingredientsListRef.append(...createItemsMarkup(ingredients));

