import Card from "./Card.js";
// import { closeModalEdit } from "./utils.js";
import FormValidator from "./FormValidator.js";
import Section from "./Section.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import "./styles/pages/index.css";
import Popup from "./Popup.js";

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
const placeCardTemplate = ".place__template";
const modalOpenImg = new PopupWithImage();
const addNewPlace = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(
        {
          cardData: item,
          handleButtonClick: (name, link) => {
            modalOpenImg.open(name, link);
          },
        },
        placeCardTemplate
      );
      const cardElem = card.createCard();

      addNewPlace.addItem(cardElem);
    },
  },
  placeListSelector
);

addNewPlace.renderer();

// const buttonEdit = document.querySelector(".button_type_edit");
// const modalOpenForm = new PopupWithForm();
// buttonEdit.addEventListener("click", () => {
//   modalOpenForm.open();
// });
// const listButtonsPopups = [
//   {
//     popupOpenButton: "place__image",
//   },
//   {
//     popupOpenButton: "button_type_edit",
//   },
// ];
// const popupImg = new Section(
//   {
//     items: listButtonsPopups,
//     renderer: (item) => {
//       const openImgPopup = new PopupWithImage(
//         { data: item },
//         ".modal_type_img"
//       );
//       openImgPopup.open();
//     },
//   },
//   ".modal"
// );

// popupImg.renderer();

// new PopupWithForm(".modal_type_edit");

export const places = document.querySelector(".places");

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
