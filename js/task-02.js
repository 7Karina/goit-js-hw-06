const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");

const markup = ingredients.map((ingredientsText) => {
  const li = document.createElement("li");
  li.textContent = ingredientsText;
  return li;
});

list.append(...markup);
