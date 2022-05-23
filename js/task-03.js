const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const galleryEL = document.querySelector(".gallery");

// const addImagesinGallery = (images) => {

//   return images.reduce(( allItems, {url, alt}) => {
//     const galleryItem = document.createElement("li");
    
//     galleryItem.innerHTML = `<img src="${url}" alt="${alt}" width="400" height="100%" />`;
//     allItems.push(galleryItem);
//     return allItems;
//   }, [])
// }

// const galleryImages = addImagesinGallery(images);
// galleryEL.append(...galleryImages);

// console.log(galleryEL);

const galleryEL = document.querySelector(".gallery");

const addImagesinGallery = (images) => {

  return images.reduce((allItems, { url, alt }) => {
         let galleryItem = `<li><img src="${url}" alt="${alt}" width="400" height="100%" /></li>`;
         allItems.push(galleryItem);
         return allItems;
 }, []).join("");
}

galleryEL.insertAdjacentHTML("beforeend", addImagesinGallery(images));
console.log(galleryEL);