import { Card } from "./Card.js";
import { closeModalEdit } from "./utils.js";
import { resetInputValidationEdit } from "./modules/validate.js";

export const places = document.querySelector(".places");

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

initialCards.forEach((item) => {
  const card = new Card(item, "#place");
  const cardElem = card.createCard();

  places.append(cardElem);
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
