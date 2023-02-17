import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(handleFormSubmit, button) {
    super(".modal_type_edit");
    this._handleFormSubmit = handleFormSubmit;
    this._button = button;
  }
  _getInputValues() {
    this._inputList = document.querySelectorAll(".form__input");
    console.log(this._inputList);

    this._formValues = {};

    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  setEventListeners() {
    this._button = document.querySelector(".form__button");
    console.log(this._button);
    this._button.addEventListener("submit", (evt) => {
      console.log("Inside seteventlistener");
      evt.preventDefault();

      this._handleFormSubmit(this._getInputValues());

      this._popup.reset();
    });
    super.setEventListeners();
  }
}
