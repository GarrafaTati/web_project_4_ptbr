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

const api = new Api({
  baseUrl: urlBase,
  headers: {
    authorization: token,
    "Content-Type": "application/json",
  },
});

api
  .getInitialCards()
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
    const dataInfoUser = {
      name: nameInput.value,
      about: aboutInput.value,
    };

    api
      .updateProfile(dataInfoUser)
      .then(() => {
        profilOnPage.setUserInfo(dataInfoUser.name, dataInfoUser.about);
      })
      .catch((err) => {
        console.log(err);
      });
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
    nameProfil.textContent = name;
    aboutProfil.textContent = about;
    avatarProfil.src = avatar;

    const ownerId = _id;
    console.log("Owner ID: ", ownerId);
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

    api
      .createCard(data)
      .then(() => {
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
      })
      .catch((error) => console.log(error));
  },
});
addNewButton.addEventListener("click", () => {
  modalAdd.open();
});

const deleteButtons = document.querySelectorAll(".place__delete");
const modalConfirmitionOpened = ".modal_type_confirmation";
const modalConfirmition = new PopupWithConfirmation(modalConfirmitionOpened);

deleteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("Open Delete popup");
    modalConfirmition.open();
  });
});

const imgProfileWrapper = document.querySelector(".profile__image-wrapper");
const imgProfile = imgProfileWrapper.querySelector(".profile__image");
const modalEditImgProfileOpened = ".modal_type_editimgprofile";
const formEditImgProfileClass = ".form__form_action_editimgprofile";
const buttonEditImgProfil = ".form__button_action_editimgprofile";
const linkImageProfile = document.querySelector(
  ".form__input_type_linkprofile"
);

const modalEditProfile = new PopupWithForm(modalEditImgProfileOpened, {
  formSelector: formEditImgProfileClass,
  buttonForm: buttonEditImgProfil,
  handleFormSubmit: () => {
    const data = {
      avatar: linkImageProfile.value,
    };
    api
      .updateAvatarProfile(data)
      .then(() => {
        imgProfile.src = data.avatar;
        linkImageProfile.value = "";
      })
      .catch((error) => console.log(error));
  },
});

imgProfileWrapper.addEventListener("click", () => {
  modalEditProfile.open();
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
export const formEditImgProfile = document.forms.editimgprofile;
new FormValidator(configObj, formEdit).enableValidation();
new FormValidator(configObj, formAdd).enableValidation();
new FormValidator(configObj, formEditImgProfile).enableValidation();
