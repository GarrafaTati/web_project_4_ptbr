import { openModalImage } from "./utils.js";
export class Card {
  constructor(cardData, cardSelector) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".place")
      .cloneNode(true);

    return cardElement;
  }

  createCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector(".title").textContent = this._name;
    this._element.querySelector(".place__img").src = this._link;
    this._element.querySelector(".place__img").alt = this._name;

    return this._element;
  }

  // createNewCard() {
  //   const titlePlace = document.querySelector(".form__input_type_title");
  //   const linkImage = document.querySelector(".form__input_type_link");
  // }

  _setEventListeners() {
    const toggleLike = this._element.querySelector(".place__likeicon");
    toggleLike.addEventListener("click", () => this._likeButton());

    const deleteButton = this._element.querySelector(".place__delete");
    deleteButton.addEventListener("click", () => this._deleteCard());

    const imgPopupElement = this._element.querySelector(".place__image");
    imgPopupElement.addEventListener("click", () => this._popUpImgEl());
  }

  _likeButton() {
    const toggleLike = this._element.querySelector(".place__likeicon");
    toggleLike.classList.toggle("place__likeicon_state_active");
  }

  _deleteCard() {
    this._element.remove();
  }

  _popUpImgEl() {
    // const imgElement = this._element.querySelector(".place__image");
    const popupImgContainer = document.querySelector(
      ".modal__wrapper_type_img"
    );
    const popupImgElement = popupImgContainer.querySelector(
      ".modal__modal_type_img"
    );
    const linkElem = this._element.querySelector(".place__img");
    const linkSrc = linkElem.src;
    popupImgElement.querySelector(".modal__img").src = linkSrc;

    const titleElem = this._element.querySelector(".title");
    const titleText = titleElem.textContent;
    popupImgElement.querySelector(".modal__title").textContent = titleText;
    popupImgElement.querySelector(".modal__img").alt = titleText;

    openModalImage();
  }
}

export const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];
