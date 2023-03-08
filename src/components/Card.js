export default class Card {
  constructor({ cardData, handleButtonClick }, cardSelector) {
    this._name = cardData.name;
    this._link = cardData.link;
    this.handleButtonClick = handleButtonClick;
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

  _setEventListeners() {
    const toggleLike = this._element.querySelector(".place__likeicon");
    toggleLike.addEventListener("click", () => this._likeButton());

    // const deleteButton = this._element.querySelector(".place__delete");
    // deleteButton.addEventListener("click", () => this._deleteCard());

    const modalImgOpen = this._element.querySelector(".place__image");
    modalImgOpen.addEventListener("click", () => {
      this.handleButtonClick(this._name, this._link);
    });
  }

  _likeButton() {
    const toggleLike = this._element.querySelector(".place__likeicon");
    toggleLike.classList.toggle("place__likeicon_state_active");
    const counter = this._element.querySelector(".place__count");
    // counter.textContent = "1";
  }

  _deleteCard() {
    this._element.remove();
  }
}