export default class FormValidator {
  constructor(obj, form) {
    this._form = document.forms["form__form"];
  }
}

// form validate
const showError = (formEl, formInputEl, errorMessage, obj) => {
  const errorElement = formEl.querySelector(`.${formInputEl.id}-error`);

  formInputEl.classList.add(obj.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(obj.errorClass);
};

export const hideError = (formEl, formInputEl, obj) => {
  const errorElement = formEl.querySelector(`.${formInputEl.id}-error`);

  formInputEl.classList.remove(obj.inputErrorClass);
  errorElement.classList.remove(obj.errorClass);
  errorElement.textContent = "";
};

const checkInputValidity = (formEl, formInputEl, obj) => {
  if (!formInputEl.validity.valid) {
    showError(formEl, formInputEl, formInputEl.validationMessage, obj);
  } else {
    hideError(formEl, formInputEl, obj);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((formInputEl) => {
    return !formInputEl.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonEl, obj) => {
  if (hasInvalidInput(inputList)) {
    buttonEl.classList.add(obj.inactiveButtonClass);
    buttonEl.setAttribute("disabled", true);
  } else {
    buttonEl.classList.remove(obj.inactiveButtonClass);
    buttonEl.removeAttribute("disabled");
  }
};

const setEventListeners = (formEl, obj) => {
  const inputList = Array.from(formEl.querySelectorAll(obj.inputSelector));
  const buttonEl = formEl.querySelector(obj.submitButtonSelector);

  toggleButtonState(inputList, buttonEl, obj);

  inputList.forEach((formInputEl) => {
    formInputEl.addEventListener("input", function () {
      checkInputValidity(formEl, formInputEl, obj);
      toggleButtonState(inputList, buttonEl, obj);
    });
  });
};

const enableValidation = (obj) => {
  const formList = Array.from(document.querySelectorAll(obj.formSelector));

  formList.forEach((formEl) => {
    formEl.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    setEventListeners(formEl, obj);
  });
};

enableValidation({
  formSelector: ".form__form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_mode_disabled",
  inputErrorClass: "form__input_mode_error",
  errorClass: "form__error_state_active",
});
