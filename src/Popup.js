import Card from "./Card.js";

export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
    this.setEventListeners();
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  open() {
    this._popup.classList.add("modal_state_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popup.classList.remove("modal_state_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  setEventListeners() {
    const closeModal = document.querySelectorAll(".modal__close");

    closeModal.forEach((modalEl) => {
      modalEl.addEventListener("click", () => {
        this.close();
      });
    });

    this._popup.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("modal")) {
        this.close();
      }
    });
  }
}
