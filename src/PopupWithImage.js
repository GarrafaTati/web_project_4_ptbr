import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor() {
    super(".modal_type_img");
  }

  open(name, link) {
    const popupImgContainer = document.querySelector(
      ".modal__wrapper_type_img"
    );

    const imgPopup = popupImgContainer.querySelector(".modal__img");
    const titlePopup = popupImgContainer.querySelector(".modal__title");

    imgPopup.src = link;
    imgPopup.alt = name;
    titlePopup.textContent = name;

    super.open();
  }
}
