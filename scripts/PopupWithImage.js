import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(data, popupSelector) {
    super(popupSelector);
    this._title = data.title;
    this._link = data.link;
  }

  open() {
    console.log("inside open function");
    // const imgElem = document.querySelector(".place__img");
    // imgElem.src = this._link;

    // const titleElem = document.querySelector(".title");
    // titleElem.textContent = this._title;

    // const popupImgContainer = document.querySelector(
    //   ".modal__wrapper_type_img"
    // );
    // const popupImgElement = popupImgContainer.querySelector(
    //   ".modal__modal_type_img"
    // );
    // const linkElem = this._element.querySelector(".place__img");
    // const linkSrc = linkElem.src;
    // popupImgElement.querySelector(".modal__img").src = linkSrc;

    // const titleElem = this._element.querySelector(".title");
    // const titleText = titleElem.textContent;
    // popupImgElement.querySelector(".modal__title").textContent = titleText;
    // popupImgElement.querySelector(".modal__img").alt = titleText;
  }
}
