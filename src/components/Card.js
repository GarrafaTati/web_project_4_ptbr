import PopupWithConfirmation from "./PopupWithConfirmation.js";
export default class Card {
  constructor({ cardData, handleButtonClick }, cardSelector, api, userId) {
    this._name = cardData.name;
    this._link = cardData.link;
    this.handleButtonClick = handleButtonClick;
    this._cardSelector = cardSelector;
    this._api = api;
    this._userId = userId;
    this._ownerId = cardData.owner._id;
    this._owner = cardData.owner;
    this._cardId = cardData._id;
    this._likes = cardData.likes;
    this._popupConfirm = new PopupWithConfirmation(
      ".modal_type_confirmation",
      this._deleteCard
    );
    console.log(this._cardId);
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
    this._element.querySelector(".place__count").textContent =
      this._likes.length;

    return this._element;
  }

  _setEventListeners() {
    const toggleLike = this._element.querySelector(".place__likeicon");
    toggleLike.addEventListener("click", () => this._likeButton());

    const deleteButton = this._element.querySelector(".place__delete");
    if (this._userId === this._ownerId) {
      deleteButton.addEventListener("click", () => this._popupConfirm.open());
    } else {
      deleteButton.classList.add("place__delete_action_hidden");
    }

    const modalImgOpen = this._element.querySelector(".place__image");
    modalImgOpen.addEventListener("click", () => {
      this.handleButtonClick(this._name, this._link);
    });
  }

  _likeButton() {
    const toggleLike = this._element.querySelector(".place__likeicon");
    // const counter = this._element.querySelector(".place__count");

    // console.log("Likes: ", this._likes);
    // console.log("UserID: ", this._userId);

    const isLiked = this._likes.some((element) => element._id === this._userId);

    console.log("isLiked: ", isLiked);

    if (!isLiked) {
      //like na foto
      toggleLike.classList.add("place__likeicon_state_active");
      // console.log("Like");
      this._api.isLiked(this._cardId, this._owner);
    } else {
      // se está like, vou fazer deslike
      toggleLike.classList.remove("place__likeicon_state_active");
      // console.log("Deslike");
      this._api.isNotLiked(this._cardId, this._owner);
    }
  }

  _deleteCard() {
    console.log("Inside Delete Card");
    console.log(this._cardId);
    this._api.deleteCard(this._cardId);
    this._element.remove();
  }
}
