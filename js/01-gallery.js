import { galleryItems } from "./gallery-items.js";

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

const openModal = (e) => {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  const imgSelected = e.target.getAttribute("data-source");

  const instance = basicLightbox.create(`
    <img src="${imgSelected}" width="800" height="600">
`);
  instance.show();
};

galleryContainer.addEventListener("click", openModal);
