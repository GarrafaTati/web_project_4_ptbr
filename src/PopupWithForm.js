import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, formSelector, button, { handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._formSelector = formSelector;
    this._buttonForm = button;
    this.setEventListeners();
  }
  _getInputValues() {
    this._inputList = document.querySelectorAll(".form__input");
    console.log(this._inputList);

    this._formValues = {};

    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    console.log("formValues", this._formValues);
    return this._formValues;
  }

  setEventListeners() {
    const formButton = document.querySelector(this._buttonForm);
    const form = document.querySelector(this._formSelector);

    console.log(formButton);
    form.addEventListener("submit", (evt) => {
      console.log("Inside seteventlistener");
      evt.preventDefault();

      this._handleFormSubmit(this._getInputValues());
    });
    formButton.addEventListener("click", () => this.close());
    super.setEventListeners();
  }
}
