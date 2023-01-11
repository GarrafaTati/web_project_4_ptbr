// form validate
const showError = (formEl, formInputEl, errorMessage) => {
  const errorElement = formEl.querySelector(`.${formInputEl.id}-error`);

  formInputEl.classList.add("form__button_mode_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("form__error_state_active");
};

const hideError = (formEl, formInputEl) => {
  const errorElement = formEl.querySelector(`.${formInputEl.id}-error`);

  formInputEl.classList.remove("form__button_mode_error");
  errorElement.classList.remove("form__error_state_active");
  errorElement.textContent = "";
};

const checkInputValidity = (formEl, formInputEl) => {
  if (!formInputEl.validity.valid) {
    showError(formEl, formInputEl, formInputEl.validationMessage);
  } else {
    hideError(formEl, formInputEl);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((formInputEl) => {
    return !formInputEl.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonEl) => {
  if (hasInvalidInput(inputList)) {
    buttonEl.classList.add("form__button_mode_disabled");
  } else {
    buttonEl.classList.remove("form__button_mode_disabled");
  }
};

const setEventListeners = (formEl) => {
  const inputList = Array.from(formEl.querySelectorAll(".form__input"));
  const buttonEl = formEl.querySelector(".form__button");

  toggleButtonState(inputList, buttonEl);

  inputList.forEach((formInputEl) => {
    formInputEl.addEventListener("input", function () {
      checkInputValidity(formEl, formInputEl);
      toggleButtonState(inputList, buttonEl);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".form__form"));

  formList.forEach((formEl) => {
    formEl.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    setEventListeners(formEl);
  });
};

enableValidation();
