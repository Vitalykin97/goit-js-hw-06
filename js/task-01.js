const categoriesList = document.querySelector("#categories");
const categoryItems = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((item) => {
  const categoryTitle = item.querySelector("h2");
  const categoryList = item.querySelector("ul");
  const categoryElements = categoryList.querySelectorAll("li");

  console.log(`Category: ${categoryTitle.textContent}`);
  console.log(`Elements: ${categoryElements.length}`);
});

