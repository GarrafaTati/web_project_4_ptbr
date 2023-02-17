import Card from "./Card.js";
import { resetInputValidation, formEdit, formAdd } from "./index.js";

export const places = document.querySelector(".places");

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
  resetInputValidation(formAdd);
}
addPlace.addEventListener("click", openModalCreate);
closeBtnAdd.addEventListener("click", closeModalCreate);

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
  resetInputValidation(formAdd);
});
