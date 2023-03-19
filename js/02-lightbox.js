import { galleryItems } from './gallery-items.js';
// Change code below this line
// 1.Make Markup
const galleryContainer = document.querySelector('.gallery');
const pictureCardsMarkup = createPictureCardsMarkup(galleryItems);
function createPictureCardsMarkup (galleryItems) { 
    return galleryItems.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
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
    // 3.Ініціалізація бібліотеки після створення і додання елементів галереї у div.gallery.
    `<div class="gallery">
    <a href="${evt.target.getAttribute(
      "href"
    )}"><img src="${evt.target.getAttribute(
    "src"
  )}" alt="${evt.target.getAttribute("alt")}" /></a>
  </div>
    `;
}
// 4.Подивися в документації секцію «Options» і додай відображення підписів до зображень з атрибута alt. Нехай підпис буде знизу і з'являється через 250 мілісекунд після відкриття зображення.
const gallery = new SimpleLightbox('.gallery a', { 
    captionsData: "alt",
    captionDelay: 250,
    showCounter: false,
});

gallery.on("show.simplelightbox");

