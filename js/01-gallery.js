import { galleryItems } from './gallery-items.js';

// Change code below this line
const galleryBox = document.querySelector('.gallery');

function galleryMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) => `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`
    )
    .join('');
}
const parsedString = galleryMarkup(galleryItems);
galleryBox.insertAdjacentHTML('beforeend', parsedString);

function onImgClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const instance = basicLightbox.create(
    `
  <img src="${event.target.dataset.source}" width="800" height="600">
  `,
    {
      onShow: (instance) => {
        instance.element().querySelector('img').onclick = instance.close;
        window.addEventListener('keydown', onClose);
      },
      onClose: (instance) => window.removeEventListener('keydown', onClose),
    }
  );
  instance.show();
}

function onClose(event) {
  if (event.code === 'Escape') {
    console.log(event.code);
    instance.close();
  }
}
galleryBox.addEventListener('click', onImgClick);
