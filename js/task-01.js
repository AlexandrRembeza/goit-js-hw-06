const categoriesListEL = document.querySelector("#categories");
const listItemsEL = categoriesListEL.querySelectorAll("#categories > li");
// const firstCategoryEL = categoriesListEL.firstElementChild;
// const secondCategoryEL = firstCategoryEL.nextElementSibling;
// const thirdCategoryEL = categoriesListEL.lastElementChild;

const countListCategories = (list) => {
    console.log(`Number of categories: ${list.children.length}`);
}

const countElementsOfListCategory = (list) => {
        list.forEach( element => {
        const title = element.querySelector("h2");
        const elements = element.querySelectorAll("li");
        
            console.log(`Category: ${title.textContent} 
Elements: ${elements.length}`);
}); 
    
};

countListCategories(categoriesListEL);
countElementsOfListCategory(listItemsEL);
// console.log(countElementsOfListCategory(firstCategoryEL));
// console.log(countElementsOfListCategory(secondCategoryEL));
// console.log(countElementsOfListCategory(thirdCategoryEL));

