const categoriesListEL = document.querySelector("#categories");
const firstCategoryEL = categoriesListEL.firstElementChild;
const secondCategoryEL = firstCategoryEL.nextElementSibling;
const thirdCategoryEL = categoriesListEL.lastElementChild;

const countListCategories = (list) => {
    console.log(`Number of categories: ${list.children.length}`);
}

const countElementsOfListCategory = (category) => {
    const title = category.querySelector("h2");
    const elements = category.querySelectorAll("ul > li")
    
    return `Category: ${title.textContent} 
Elements: ${elements.length}`;
}

countListCategories(categoriesListEL);
console.log(countElementsOfListCategory(firstCategoryEL));
console.log(countElementsOfListCategory(secondCategoryEL));
console.log(countElementsOfListCategory(thirdCategoryEL));

