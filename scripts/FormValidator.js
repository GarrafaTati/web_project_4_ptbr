export default class FormValidator {
  constructor(config, form) {
    this._form = form;
    this._config = config;
  }

  enableValidation() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._setEventListeners();
    });
  }

  _setEventListeners() {
    const inputList = Array.from(
      this._form.querySelectorAll(this._config.inputSelector)
    );
    const buttonEl = this._form.querySelector(
      this._config.submitButtonSelector
    );

    this._toggleButtonState(inputList, buttonEl);

    inputList.forEach((formInputEl) => {
      formInputEl.addEventListener("input", function () {
        this._checkInputValidity(formInputEl);
        this._toggleButtonState(inputList, buttonEl);
      });
    });
  }

  _toggleButtonState(inputList, buttonEl) {
    if (this._hasInvalidInput(inputList)) {
      buttonEl.classList.add(this._config.inactiveButtonClass);
      buttonEl.setAttribute("disabled", true);
    } else {
      buttonEl.classList.remove(this._config.inactiveButtonClass);
      buttonEl.removeAttribute("disabled");
    }
  }

  _hasInvalidInput(inputList) {
    return inputList.some((formInputEl) => {
      return !formInputEl.validity.valid;
    });
  }

  _checkInputValidity(formInputEl) {
    if (!formInputEl.validity.valid) {
      this._showError(formInputEl, formInputEl.validationMessage);
    } else {
      this._hideError(formInputEl);
    }
  }

  _showError(formInputEl, errorMessage) {
    const errorElement = this._form.querySelector(`.${formInputEl.id}-error`);

    formInputEl.classList.add(this._config.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._config.errorClass);
  }

  _hideError(formInputEl) {
    const errorElement = this._form.querySelector(`.${formInputEl.id}-error`);

    formInputEl.classList.remove(this._config.inputErrorClass);
    errorElement.classList.remove(this._config.errorClass);
    errorElement.textContent = "";
  }
}

// enableValidation({
//   formSelector: ".form__form",
//   inputSelector: ".form__input",
//   submitButtonSelector: ".form__button",
//   inactiveButtonClass: "form__button_mode_disabled",
//   inputErrorClass: "form__input_mode_error",
//   errorClass: "form__error_state_active",
// });
