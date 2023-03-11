import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import "./index.css";

const urlBase = "https://around.nomoreparties.co/v1/web_ptbr_cohort_02";
const token = "a1b5ce98-6b5c-47c4-b5da-5267f74b926c";
const places = document.querySelector(".places");
const modalImgOpen = new PopupWithImage();
const placeListSelector = ".places";
const placeCardTemplate = ".place__template";
// const titlePlaceHtml = places.querySelector(".title");
// const imagePlaceHtml = places.querySelector(".place__img");

const api = new Api({
  baseUrl: urlBase,
  headers: {
    authorization: token,
  },
});

api
  .getInitialCards()
  .then((data) => data)
  .then((items) => {
    const addNewPlace = new Section(
      {
        items: items,
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
  })

  .catch((err) => {
    console.log(err);
  });

const modalEditOpened = ".modal_type_edit";
const editButton = document.querySelector(".button_type_edit");
const formEditClass = ".form__form_action_edit";
const buttonEdit = ".form__button_action_save";
const htmlName = ".profile__name";
const htmlAbout = ".profile__aboutme";
const nameInput = document.querySelector(".form__input_type_name");
const aboutInput = document.querySelector(".form__input_type_about");

const profilOnPage = new UserInfo({
  selectorName: htmlName,
  selectorAbout: htmlAbout,
});

const modalEdit = new PopupWithForm(modalEditOpened, {
  formSelector: formEditClass,
  buttonForm: buttonEdit,
  handleFormSubmit: () => {
    const dataInfo = {
      name: nameInput.value,
      about: aboutInput.value,
    };

    profilOnPage.setUserInfo(dataInfo.name, dataInfo.about);
  },
});

editButton.addEventListener("click", () => {
  modalEdit.open();

  nameInput.value = profilOnPage.getUserInfo().name;
  aboutInput.value = profilOnPage.getUserInfo().about;
});

const nameProfil = document.querySelector(".profile__name");
const aboutProfil = document.querySelector(".profile__aboutme");
const avatarProfil = document.querySelector(".profile__image");

api
  .getUser()
  .then(({ name, about, avatar, _id }) => {
    console.log(_id);
    nameProfil.textContent = name;
    aboutProfil.textContent = about;
    avatarProfil.src = avatar;
  })
  .catch((error) => console.log(error));

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

const deleteButton = document.querySelector(".place__delete");
const modalConfirmitionOpened = ".modal_type_confirmation";
const formEditProfilClass = ".form__form_action_create";
const buttonEditProfil = ".form__button_action_create";
const modalConfirmition = new PopupWithConfirmation(modalConfirmitionOpened);

// deleteButton.addEventListener("click", () => {
//   modalConfirmition.open();
// });

const imgProfil = document.querySelector(".profile__image-wrapper");
const modalEditProfilOpened = ".modal_type_editprofil";

// apiUser
//   .updateProfile()
//   .then(() => {
//     const modalEditProfil = new PopupWithForm(modalEditProfilOpened, {
//       formSelector: formEditProfilClass,
//       buttonForm: buttonEditProfil,
//       handleFormSubmit: () => {
//         const data = {
//           link: linkImageProfil.value,
//         };

//         linkImageProfil.value = "";
//       },
//     });

//     imgProfil.addEventListener("click", () => {
//       modalEditProfil.open();
//     });
//   })
//   .catch((error) => console.log(error));

const configObj = {
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_mode_disabled",
  inputErrorClass: "form__input_mode_error",
  errorClass: "form__error_state_active",
};
export const formEdit = document.forms.edit;
export const formAdd = document.forms.add;
export const formEditProfil = document.forms.editprofil;
new FormValidator(configObj, formEdit).enableValidation();
new FormValidator(configObj, formAdd).enableValidation();
new FormValidator(configObj, formEditProfil).enableValidation();
