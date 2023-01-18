import {
  resetInputValidationEdit,
  resetInputValidationAdd,
} from "./modules/validate.js";

// open and close popup Edit
const edit = document.querySelector(".button_type_edit");
const editPopup = document.querySelector(".modal_type_edit");
const closeBtnEdit = editPopup.querySelector(".modal__close");

function closePopupEditEsc(evt) {
  if (evt.key === "Escape") {
    removeClassEditPopup();
    document.removeEventListener("keydown", closePopupEditEsc);
  }
}

function addClassEditPopup() {
  editPopup.classList.add("modal_state_opened");
  // close popup with esc
  document.addEventListener("keydown", closePopupEditEsc);
}

function removeClassEditPopup() {
  editPopup.classList.remove("modal_state_opened");
  resetInputValidationEdit();
}

edit.addEventListener("click", addClassEditPopup);
closeBtnEdit.addEventListener("click", removeClassEditPopup);

// open and close popup Add
const addPlace = document.querySelector(".button_type_add");
const addPopup = document.querySelector(".modal_type_add");
const closeBtnAdd = addPopup.querySelector(".modal__close");

function closePopupAddEsc(evt) {
  if (evt.key === "Escape") {
    removeClassAddPopup();
    document.removeEventListener("keydown", closePopupAddEsc);
  }
}

function addClassAddPopup() {
  addPopup.classList.add("modal_state_opened");
  // close popup with esc
  document.addEventListener("keydown", closePopupAddEsc);
}

function removeClassAddPopup() {
  addPopup.classList.remove("modal_state_opened");
  resetInputValidationAdd();
}

addPlace.addEventListener("click", addClassAddPopup);
closeBtnAdd.addEventListener("click", removeClassAddPopup);

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

  removeClassEditPopup();
  resetInputValidationEdit();
}

formElement.addEventListener("submit", handleProfileFormSubmit);

// Add cards to places
const places = document.querySelector(".places");

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

initialCards.forEach(function (item) {
  addPlaceCard(item.name, item.link);
});

// array cards
function addPlaceCard(nameValue, linkValue) {
  //Place article
  const placeContainer = document.querySelector("#place").content;
  const placeElement = placeContainer.querySelector(".place").cloneNode(true);

  placeElement.querySelector(".title").textContent = nameValue;
  placeElement.querySelector(".place__img").src = linkValue;
  placeElement.querySelector(".place__img").alt = nameValue;

  const addLike = placeElement.querySelector(".place__likeicon");
  addLike.addEventListener("click", function () {
    addLike.classList.toggle("place__likeicon_state_active");
  });

  const deleteButton = placeElement.querySelector(".place__delete");
  deleteButton.addEventListener("click", function (evt) {
    const place = evt.target.closest(".place");

    place.remove();
  });

  const imgElement = placeElement.querySelector(".place__image");
  imgElement.addEventListener("click", function () {
    const popupImgContainer = document.querySelector(
      ".modal__wrapper_type_img"
    );
    const popupImgElement = popupImgContainer.querySelector(
      ".modal__modal_type_img"
    );

    const linkElem = placeElement.querySelector(".place__img");
    const linkSrc = linkElem.src;
    popupImgElement.querySelector(".modal__img").src = linkSrc;

    const titleElem = placeElement.querySelector(".title");
    const titleText = titleElem.textContent;
    popupImgElement.querySelector(".modal__title").textContent = titleText;
    popupImgElement.querySelector(".modal__img").alt = titleText;

    openImgPopup();
  });

  places.append(placeElement);
}

//When click button create
const formElementCreate = document.querySelector(".form__form_action_create");
formElementCreate.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const titlePlace = document.querySelector(".form__input_type_title");
  const linkImage = document.querySelector(".form__input_type_link");

  addPlaceCard(titlePlace.value, linkImage.value);

  titlePlace.value = "";
  linkImage.value = "";

  removeClassAddPopup();
  resetInputValidationAdd();
});

function closePopupImgEsc(evt) {
  if (evt.key === "Escape") {
    removeClassImgPopup();
    document.removeEventListener("keydown", closePopupImgEsc);
  }
}

//open image popup
const imgPopup = document.querySelector(".modal_type_img");
function openImgPopup() {
  imgPopup.classList.add("modal_state_opened");
  // close popup with esc
  document.addEventListener("keydown", closePopupImgEsc);
}

const allTitleValueElement = places.querySelectorAll(".place__img");
allTitleValueElement.forEach(function (titleValue) {
  titleValue.addEventListener("click", openImgPopup);
});

const closeBtnImg = imgPopup.querySelector(".modal__close");
function removeClassImgPopup() {
  imgPopup.classList.remove("modal_state_opened");
}

closeBtnImg.addEventListener("click", removeClassImgPopup);

// close popup with overlay
const modal = document.querySelectorAll(".modal");

modal.forEach(function (modal) {
  window.addEventListener("click", (evt) => {
    if (evt.target === editPopup) {
      removeClassEditPopup();
    } else if (evt.target === addPopup) {
      removeClassAddPopup();
    } else if (evt.target === imgPopup) {
      removeClassImgPopup();
    }
  });
});
