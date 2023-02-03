import {
  resetInputValidationEdit,
  resetInputValidationAdd,
} from "./modules/validate.js";
import { Card, initialCards } from "./Card.js";
import { closeModalCreate, closeModalEdit } from "./utils.js";

export const places = document.querySelector(".places");

initialCards.forEach((item) => {
  const card = new Card(item, "#place");
  const cardElem = card.createCard();

  places.append(cardElem);
});

//When click button create
const formElementCreate = document.querySelector(".form__form_action_create");
formElementCreate.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const titlePlace = document.querySelector(".form__input_type_title");
  const linkImage = document.querySelector(".form__input_type_link");

  addPlaceCard(titlePlace.value, linkImage.value);

  titlePlace.value = "";
  linkImage.value = "";

  closeModalCreate();
  resetInputValidationAdd();
});

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
  resetInputValidationEdit();
}

formElement.addEventListener("submit", handleProfileFormSubmit);
