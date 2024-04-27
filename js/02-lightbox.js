import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

gallery.insertAdjacentHTML("afterbegin", createGalleryImg(galleryItems));


var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,

 });

gallery.addEventListener("click", handlerClickGallery);


function handlerClickGallery(e) {
  const img = e.target.classList.contains("gallery__image");
  if (img) {
   lightbox.open(img)
    
  }
}


function createGalleryImg(arr) {
    return arr
      .map(
        ({ preview, original, description }) =>
          `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
        />
        </a>
    </li>`
      )
      .join("");
  }
