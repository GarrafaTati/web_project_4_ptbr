import Card from "./Card.js";
import { resetInputValidationEdit, resetInputValidationAdd } from "./script.js";

export const places = document.querySelector(".places");

//POPUP IMAGE
const imgPopupElem = document.querySelector(".modal_type_img");
export function openModalImage() {
  imgPopupElem.classList.add("modal_state_opened");
  // close popup with esc
  document.addEventListener("keydown", closePopupImgEsc);
}

const images = places.querySelectorAll(".place__img");
images.forEach(function (image) {
  image.addEventListener("click", openModalImage);
});

const closeBtnImg = imgPopupElem.querySelector(".modal__close");
export function closeModalImage() {
  imgPopupElem.classList.remove("modal_state_opened");
}
closeBtnImg.addEventListener("click", closeModalImage);

function closePopupImgEsc(evt) {
  if (evt.key === "Escape") {
    closeModalImage();
    document.removeEventListener("keydown", closePopupImgEsc);
  }
}

//POPUP EDIT
const edit = document.querySelector(".button_type_edit");
const editPopupElem = document.querySelector(".modal_type_edit");
const closeBtnEdit = editPopupElem.querySelector(".modal__close");
function closePopupEditEsc(evt) {
  if (evt.key === "Escape") {
    closeModalEdit();
    document.removeEventListener("keydown", closePopupEditEsc);
  }
}

function openModalEdit() {
  editPopupElem.classList.add("modal_state_opened");
  // close popup with esc
  document.addEventListener("keydown", closePopupEditEsc);
}

export function closeModalEdit() {
  editPopupElem.classList.remove("modal_state_opened");
  resetInputValidationEdit();
}
edit.addEventListener("click", openModalEdit);
closeBtnEdit.addEventListener("click", closeModalEdit);

//POPUP CREATE
const addPlace = document.querySelector(".button_type_add");
const addPopupElem = document.querySelector(".modal_type_add");
const closeBtnAdd = addPopupElem.querySelector(".modal__close");
function closePopupAddEsc(evt) {
  if (evt.key === "Escape") {
    closeModalCreate();
    document.removeEventListener("keydown", closePopupAddEsc);
  }
}

function openModalCreate() {
  addPopupElem.classList.add("modal_state_opened");
  // close popup with esc
  document.addEventListener("keydown", closePopupAddEsc);
}

export function closeModalCreate() {
  addPopupElem.classList.remove("modal_state_opened");
  resetInputValidationAdd();
}
addPlace.addEventListener("click", openModalCreate);
closeBtnAdd.addEventListener("click", closeModalCreate);

// close popup with overlay
const modal = document.querySelectorAll(".modal");
modal.forEach(function (modal) {
  window.addEventListener("click", (evt) => {
    if (evt.target === editPopupElem) {
      closeModalEdit();
    } else if (evt.target === addPopupElem) {
      closeModalCreate();
    } else if (evt.target === imgPopupElem) {
      closeModalImage();
    }
  });
});

//When click button create
const formElementCreate = document.querySelector(".form__form_action_create");
formElementCreate.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const titlePlace = document.querySelector(".form__input_type_title");
  const linkImage = document.querySelector(".form__input_type_link");

  const data = {
    name: titlePlace.value,
    link: linkImage.value,
  };

  const card = new Card(data, "#place");

  places.prepend(card.createCard());

  titlePlace.value = "";
  linkImage.value = "";

  closeModalCreate();
  resetInputValidationAdd();
});
