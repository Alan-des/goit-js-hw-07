import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

gallery.insertAdjacentHTML("afterbegin", createGalleryImg(galleryItems));

document.querySelectorAll(".gallery__link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

gallery.addEventListener("click", handlerClickGallery);

function createGalleryImg(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
      />
      </a>
  </li>`
    )
    .join("");
}

let instance;

function handlerClickGallery(e) {
  const img = e.target.classList.contains("gallery__image");
  if (img) {
    const source = e.target.dataset.source;
    const alt = e.target.alt;
    instance = basicLightbox.create(createBigImg(source, alt));
    instance.show();
    window.addEventListener("keydown", closeModal);
  }
}

function closeModal(e) {
  if (e.code === "Escape") {
    instance.close();
    window.removeEventListener("keydown", closeModal);
  }
}

function createBigImg(source, alt) {
  return `<div>
            <img src="${source}" alt="${alt}" width = "700px">
            </div>`;
}
