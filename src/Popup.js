export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
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

    const errorsMessage = document.querySelectorAll(".form__error");
    const buttons = document.querySelectorAll(".form__button");

    errorsMessage.forEach((errorMessage) => {
      errorMessage.classList.remove("form__error_state_active");
    });

    buttons.forEach((button) => {
      button.setAttribute("disabled", true);
      button.classList.add("form__button_mode_disabled");
    });
    const forms = document.querySelectorAll(".form__form");
    forms.forEach((form) => {
      form.reset();
    });
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
