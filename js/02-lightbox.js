import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const photosMark = createGalleryPhotos(galleryItems);

function createGalleryPhotos(photos) {
  return photos
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img class="gallery__image lazyload"
      src="${preview}" 
      data-source="${original}" 
      alt="${description}"/></a></div>`;
    })
    .join("");
}
galleryContainer.insertAdjacentHTML("beforeend", photosMark);

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  animationSpeed: 250,
});
