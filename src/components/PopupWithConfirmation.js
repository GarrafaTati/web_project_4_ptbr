import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this.setEventListeners();
  }

  close() {
    super.close();
    const buttons = document.querySelectorAll(".form__button");

    buttons.forEach((button) => {
      button.classList.remove("form__button_mode_disabled");
      button.setAttribute("disabled", false);
    });
  }
}
