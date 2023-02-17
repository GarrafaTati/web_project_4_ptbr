import Popup from "./Popup.js";
import { places } from "./index.js";

export default class PopupWithImage extends Popup {
  constructor(title, link) {
    super(".modal_type_img");
    this._title = title;
    this._link = link;
  }

  open() {
    const popupImgContainer = document.querySelector(
      ".modal__wrapper_type_img"
    );

    this._title = places.querySelector(".title").textContent;
    this._link = places.querySelector(".place__img").src;
    const imgPopup = popupImgContainer.querySelector(".modal__img");
    const titlePopup = popupImgContainer.querySelector(".modal__title");

    imgPopup.src = this._link;
    imgPopup.alt = this._title;
    titlePopup.textContent = this._title;

    console.log(this._link);
    console.log(this._title);

    super.open();
  }
}
