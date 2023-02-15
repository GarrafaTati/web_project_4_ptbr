import Card from "./Card.js";
import { closeModalEdit } from "./utils.js";
import FormValidator from "./FormValidator.js";
import Section from "./Section.js";

const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

const placeListSelector = ".places";
const addNewPlace = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item, "#place");
      const cardElem = card.createCard();

      addNewPlace.addItem(cardElem);
    },
  },
  placeListSelector
);

addNewPlace.renderer();

// recover and write the inputs Profile
const formElement = document.querySelector(".form__form");
function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  const nameInput = formElement.querySelector(".form__input_type_name");
  const aboutInput = formElement.querySelector(".form__input_type_about");

  const addedName = nameInput.value;
  const addedAbout = aboutInput.value;

  const nameProfile = document.querySelector(".profile__name");
  const aboutProfile = document.querySelector(".profile__aboutme");

  nameProfile.textContent = addedName;
  aboutProfile.textContent = addedAbout;

  closeModalEdit();
  resetInputValidation(formEdit);
}
formElement.addEventListener("submit", handleProfileFormSubmit);

const configObj = {
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_mode_disabled",
  inputErrorClass: "form__input_mode_error",
  errorClass: "form__error_state_active",
};
export const formEdit = document.forms.edit;
export const formAdd = document.forms.add;
new FormValidator(configObj, formEdit).enableValidation();
new FormValidator(configObj, formAdd).enableValidation();

export function resetInputValidation(form) {
  const errorsMessage = document.querySelectorAll(".form__error");
  const buttons = document.querySelectorAll(".form__button");

  errorsMessage.forEach((errorMessage) => {
    errorMessage.classList.remove("form__error_state_active");
  });

  buttons.forEach((button) => {
    button.setAttribute("disabled", true);
    button.classList.add("form__button_mode_disabled");
  });

  form.reset();
}
