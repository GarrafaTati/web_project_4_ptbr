export default class Card {
  constructor({ cardData, handleButtonClick }, cardSelector, api) {
    this._name = cardData.name;
    this._link = cardData.link;
    this.handleButtonClick = handleButtonClick;
    this._cardSelector = cardSelector;
    // this._api = api;
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

    // get _id owner para mostrar o botão delete somente para esses cards
    // if ownerId === "6e0bff19e3e8a120a977960b" criar o botão.

    // const ownerId = this._api
    //   .getUser()
    //   .then(( _id ) => {
    //     console.log(_id);
    //     console.log(ownerId);
    //   })
    //   .catch((error) => console.log(error));

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

    // adicionar numeros de likes e delete likes
  }

  _deleteCard() {
    this._element.remove();
  }
}
