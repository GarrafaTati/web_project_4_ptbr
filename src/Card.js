export default class Card {
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

  _setEventListeners() {
    const toggleLike = this._element.querySelector(".place__likeicon");
    toggleLike.addEventListener("click", () => this._likeButton());

    const deleteButton = this._element.querySelector(".place__delete");
    deleteButton.addEventListener("click", () => this._deleteCard());
  }

  _likeButton() {
    const toggleLike = this._element.querySelector(".place__likeicon");
    toggleLike.classList.toggle("place__likeicon_state_active");
  }

  _deleteCard() {
    this._element.remove();
  }
}
