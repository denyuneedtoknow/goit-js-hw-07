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
const itemList = []
const listMaking = ingredients.forEach((ingredient) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = ingredient;
  itemList.push(itemEl)
  console.log(itemList);
  return itemList

}
);
listEl.append(...itemList);
console.log(listEl);
