const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const listEl = document.querySelector("#ingredients");
console.log(ingredients);
const listMaking = ingredients.forEach((ingredient) => {
  // console.log(ingredient);
  const itemEl = document.createElement("li");
  itemEl.textContent = ingredient;
  // console.log(itemEl);
  listEl.appendChild(itemEl);
});
console.log(listEl);
