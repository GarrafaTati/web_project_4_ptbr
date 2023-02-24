import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import Section from "./Section.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";
import "./styles/pages/index.css";

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
const places = document.querySelector(".places");

const modalImgOpen = new PopupWithImage();
const addNewPlace = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(
        {
          cardData: item,
          handleButtonClick: (name, link) => {
            modalImgOpen.open(name, link);
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

const modalEditOpened = ".modal_type_edit";
const editButton = document.querySelector(".button_type_edit");
const formEditClass = ".form__form_action_edit";
const buttonEdit = ".form__button_action_save";
const htmlName = ".profile__name";
const htmlAbout = ".profile__aboutme";
const nameInput = document.querySelector(".form__input_type_name");
const nameAbout = document.querySelector(".form__input_type_about");

const modalEdit = new PopupWithForm(modalEditOpened, {
  formSelector: formEditClass,
  buttonForm: buttonEdit,
  handleFormSubmit: (name, about) => {
    const profilOnPage = new UserInfo({
      selectorName: htmlName,
      selectorAbout: htmlAbout,
    });

    const dataInfo = {
      name: nameInput.value,
      about: nameAbout.value,
    };

    profilOnPage.setUserInfo(dataInfo.name, dataInfo.about);
  },
});

editButton.addEventListener("click", () => {
  modalEdit.open();
});

const addNewButton = document.querySelector(".button_type_add");
const formAddNewClass = ".form__form_action_create";
const buttonAddNew = ".form__button_action_create";
const modalAddNewOpened = ".modal_type_add";
const titlePlace = document.querySelector(".form__input_type_title");
const linkImage = document.querySelector(".form__input_type_link");

const modalAdd = new PopupWithForm(modalAddNewOpened, {
  formSelector: formAddNewClass,
  buttonForm: buttonAddNew,
  handleFormSubmit: () => {
    const data = {
      name: titlePlace.value,
      link: linkImage.value,
    };
    const card = new Card(
      {
        cardData: data,
        handleButtonClick: (name, link) => {
          modalImgOpen.open(name, link);
        },
      },
      placeCardTemplate
    );

    places.prepend(card.createCard());

    titlePlace.value = "";
    linkImage.value = "";
  },
});
addNewButton.addEventListener("click", () => {
  modalAdd.open();
});

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
