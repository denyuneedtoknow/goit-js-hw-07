const categoriesEl = document.querySelector("#categories");
console.log(`В списке ${categoriesEl.children.length} категории.`);
const headline = document.querySelectorAll("h2");
const names = headline.forEach((name) => {
  console.log(`Категория: ${name.outerText}`);
  console.log(
    `Количество элементов: ${name.parentNode.querySelectorAll("li").length}`
  );
});
