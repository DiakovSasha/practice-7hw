import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryBox = document.querySelector('.gallery');

function renderMarkup(pictures) {
  return pictures
    .map(
      ({ description, original, preview }) =>
        `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>`
    )
    .join('');
}

const textMarkup = renderMarkup(galleryItems);
galleryBox.insertAdjacentHTML('beforeend', textMarkup);

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
