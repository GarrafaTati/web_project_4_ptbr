import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, { handleFormSubmit, formSelector, buttonForm }) {
    super(popupSelector);
    this._formSelector = formSelector;
    this._buttonForm = buttonForm;
    this._handleFormSubmit = handleFormSubmit;
    this.setEventListeners();
  }
  _getInputValues() {
    this._inputList = document.querySelectorAll(".form__input");

    this._formValues = {};

    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  setEventListeners() {
    const formButton = document.querySelector(this._buttonForm);
    const form = document.querySelector(this._formSelector);

    form.addEventListener("submit", (evt) => {
      evt.preventDefault();

      this._handleFormSubmit(this._getInputValues());
    });
    formButton.addEventListener("click", () => this.close());
    super.setEventListeners();
  }
}
