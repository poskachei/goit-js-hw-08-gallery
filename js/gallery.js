"use strict";

import { default as imagesCollection } from "./gallery-items.js";

const refGallery = document.querySelector(".js-gallery");
const refLightBox = document.querySelector(".js-lightbox");
const refPopUpImg = document.querySelector(".lightbox___image");
const refCloseBtn = document.querySelector("button[data-action=close-modal]");

const imagesToPage = imagesCollection.reduce((acc, img) => {
  img = `<li class="gallery__item">
            <a class="gallery__link" href="${img.original}">
               <img class="gallery__image" src="${img.preview}" data-source="${img.original}" alt="${img.description}"/>
            </a>
        </li>`;
  return (acc += img);
}, " ");

refGallery.insertAdjacentHTML("afterbegin", imagesToPage);

const openPopUp = (e) => {
  if (e.target === e.currentTarget) {
    return;
  }
  e.preventDefault();
  refLightBox.classList.add("is-open");
  refPopUpImg.setAttribute("src", `${e.target.getAttribute("src")}`);
};

const closePopUp = (e) => {
  if (refLightBox.classList.contains("is-open") && e.target !== refPopUpImg) {
    refLightBox.classList.remove("is-open");
  }
  return;
};

refGallery.addEventListener("click", openPopUp);
refCloseBtn.addEventListener("click", closePopUp);
