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
const modalEditOpened = ".modal_type_edit";
const modalAddNewOpened = ".modal_type_add";
const editButton = document.querySelector(".button_type_edit");
const addNewButton = document.querySelector(".button_type_add");
const places = document.querySelector(".places");
const formEditClass = ".form__form_action_edit";
const formAddNewClass = ".form__form_action_create";
const buttonEdit = ".form__button_action_save";
const buttonAddNew = ".form__button_action_create";

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

// new UserInfo();

editButton.addEventListener("click", () => {
  const modalEdit = new PopupWithForm(
    {
      handleFormSubmit: (name, about) => {
        //setar meu user...
        // new UserInfo.setUserInfo(name, about);
      },
    },
    modalEditOpened,
    formEditClass,
    buttonEdit
  );
  modalEdit.open();
});

const titlePlace = document.querySelector(".form__input_type_title");
const linkImage = document.querySelector(".form__input_type_link");
const data = {
  name: titlePlace.value,
  link: linkImage.value,
};

addNewButton.addEventListener("click", () => {
  const modalAdd = new PopupWithForm(
    modalAddNewOpened,
    formAddNewClass,
    buttonAddNew,
    {
      handleFormSubmit: () => {
        console.log("Inside handleForm");
        const card = new Card(data, "#place");

        places.prepend(card.createCard());
        places.renderer();

        titlePlace.value = "";
        linkImage.value = "";
      },
    }
  );
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
