const formEditEl = document.forms.edit;
const buttonSaveEl = formEditEl.elements.button_save;
const errorInputName = formEditEl.querySelector(".input-name-error");
const errorInputAbout = formEditEl.querySelector(".input-about-error");
export function resetInputValidationEdit() {
  formEditEl.reset();
  buttonSaveEl.setAttribute("disabled", true);
  buttonSaveEl.classList.add("form__button_mode_disabled");
  errorInputName.classList.remove("form__error_state_active");
  errorInputAbout.classList.remove("form__error_state_active");
}

const formAddEl = document.forms.add;
const buttonAddEl = formAddEl.elements.button_add;
const errorInputTitle = formAddEl.querySelector(".input-title-error");
const errorInputUrl = formAddEl.querySelector(".input-link-error");
export function resetInputValidationAdd() {
  formAddEl.reset();
  buttonAddEl.setAttribute("disabled", true);
  buttonAddEl.classList.add("form__button_mode_disabled");
  errorInputTitle.classList.remove("form__error_state_active");
  errorInputUrl.classList.remove("form__error_state_active");
}
