const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEL = document.querySelector("#ingredients");

const createIngredientsListItems = (ingredients) => {
  
 return ingredients.map(ingredient => {
        const newItem = document.createElement("li");
        newItem.classList.add("item");
        newItem.textContent = `${ingredient}`;
        return newItem;
        });
}

ingredientsListEL.append(...createIngredientsListItems(ingredients));
console.log(ingredientsListEL);

// const createIngredientsListItems = (ingredients) => {
  
//         ingredients.forEach(ingredient => {
//         const newItem = document.createElement("li");
//         newItem.classList.add("item");
//         newItem.textContent = `${ingredient}`;
//         ingredientsListEL.append(newItem);
//         });
  
//   return ingredientsListEL;
// }

// console.log(createIngredientsListItems(ingredients));

