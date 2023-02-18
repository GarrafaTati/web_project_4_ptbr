import Card from "./Card.js";
import { resetInputValidation, formEdit, formAdd } from "./index.js";

// //When click button create
// const formElementCreate = document.querySelector(".form__form_action_create");
// formElementCreate.addEventListener("submit", function (evt) {
//   evt.preventDefault();

//   const titlePlace = document.querySelector(".form__input_type_title");
//   const linkImage = document.querySelector(".form__input_type_link");

//   const data = {
//     name: titlePlace.value,
//     link: linkImage.value,
//   };

//   const card = new Card(data, "#place");

//   places.prepend(card.createCard());

//   titlePlace.value = "";
//   linkImage.value = "";

//   closeModalCreate();
//   resetInputValidation(formAdd);
// });
