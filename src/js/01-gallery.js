import { galleryItems } from './gallery-items.js';
// Change code below thiп

// 1.Make Markup
const galleryContainer = document.querySelector('.gallery');
const pictureCardsMarkup = createPictureCardsMarkup(galleryItems);
function createPictureCardsMarkup (galleryItems) { 
    return galleryItems.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
        `
    }).join('');
}
galleryContainer.insertAdjacentHTML('beforeend', pictureCardsMarkup );

// 2.Реалізація делегування на div.gallery і отримання url великого зображення.

galleryContainer.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(evt) {
    evt.preventDefault();
    const isPictureSwatchEl = evt.target.classList.contains('gallery__image');
    if (!isPictureSwatchEl) {
        return;
    }
    
    // 3. Підключення бібліотеки
    const instance = basicLightbox.create(`
    <img src="${evt.target.getAttribute('src')}" width="800" height="600">
    `);

    
    instance.show();

    if (instance.show()) {
        window.addEventListener('keydown', onEscKeyPress);

        function onEscKeyPress(evt) {
            if(evt.key === 'Escape') {
                instance.close();
            }
        }
    }
}




