export default class UserInfo {
  constructor(data) {
    this._name = data.name;
    this._about = data.about;
    this._inputName = data.inputName;
    this._inputAbout = data.inputAbout;
  }

  getUserInfo() {
    this._name = document.querySelector(".profile__name").textContent;
    this._about = document.querySelector(".profile__aboutme").textContent;
  }

  setUserInfo() {
    this._inputName = formElement.querySelector(".form__input_type_name").value;
    this._inputAbout = formElement.querySelector(
      ".form__input_type_about"
    ).value;

    nameProfile.textContent = addedName;
    aboutProfile.textContent = addedAbout;

    // this._title = places.querySelector(".title").textContent;
    // this._link = places.querySelector(".place__img").src;
    // const imgPopup = popupImgContainer.querySelector(".modal__img");
    // const titlePopup = popupImgContainer.querySelector(".modal__title");

    // imgPopup.src = this._link;
    // imgPopup.alt = this._title;
    // titlePopup.textContent = this._title;
  }
}

// // recover and write the inputs Profile
// const formElement = document.querySelector(".form__form");
// function handleProfileFormSubmit(evt) {
//   evt.preventDefault();

//   const nameInput = formElement.querySelector(".form__input_type_name");
//   const aboutInput = formElement.querySelector(".form__input_type_about");

//   const addedName = nameInput.value;
//   const addedAbout = aboutInput.value;

//   const nameProfile = document.querySelector(".profile__name");
//   const aboutProfile = document.querySelector(".profile__aboutme");

//   nameProfile.textContent = addedName;
//   aboutProfile.textContent = addedAbout;

//   closeModalEdit();
//   resetInputValidation(formEdit);
// }
// formElement.addEventListener("submit", handleProfileFormSubmit);
