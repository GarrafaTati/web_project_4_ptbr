// variables
const edit = document.querySelector('.button_profile_type_edit');
const addPlace = document.querySelector('.button_profile_type_add');
const editPopup = document.querySelector('.modal_container__edit');
const addPopup = document.querySelector('.modal_container__add');
const closeBtnEdit = editPopup.querySelector('.modal_container__close');
const closeBtnAdd = addPopup.querySelector('.modal_container__close');
const wrapper = document.querySelector('.modal_container__wrapper');
const places = document.querySelector('.places');
const addPlaceBtn = document.querySelector('.form_container__button');

// open and close popup Edit
function addClassEditPopup(){
  editPopup.classList.add('modal_container_state_opened'); 
  wrapper.classList.add('wrapper_opend');
}

function removeClassEditPopup(){
  editPopup.classList.remove('modal_container_state_opened');
}

edit.addEventListener('click', addClassEditPopup);
closeBtnEdit.addEventListener('click', removeClassEditPopup);

// open and close popup Add
function addClassAddPopup(){
  addPopup.classList.add('modal_container_state_opened'); 
}

function removeClassAddPopup(){
  addPopup.classList.remove('modal_container_state_opened');
}

addPlace.addEventListener('click', addClassAddPopup);
closeBtnAdd.addEventListener('click', removeClassAddPopup);

// recover and write the inputs Profile
const formElement = document.querySelector('.form_container__form');

function handleProfileFormSubmit(evt) {

  evt.preventDefault();

  const nameInput = formElement.querySelector('.form_container__input_type_name');
  const aboutInput = formElement.querySelector('.form_container__input_type_about');

  const addedName = nameInput.value;
  const addedAbout = aboutInput.value;

  const nameProfile = document.querySelector('.profile__name');
  const aboutProfile = document.querySelector('.profile__aboutme');

  nameProfile.textContent = addedName;
  aboutProfile.textContent = addedAbout;

  removeClassEditPopup();
}

formElement.addEventListener('submit', handleProfileFormSubmit); 

const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    name: "Montanhas Carecas",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
]; 


// array cards

function addPlaceCard(nameValue, linkValue){
  //Place article
  const placeContainer = document.querySelector('#place').content;
  const placeElement = placeContainer.querySelector('.place').cloneNode(true);

  // console.log(placeElement);
  placeElement.querySelector('.title').textContent = nameValue;
  placeElement.querySelector('.place__img_content').textContent = linkValue;

  placeElement.querySelector('.place__like_icon').addEventListener("click", function (evt) {
    evt.target.classList.toggle('place__like_icon_state_active');
  }); 

  places.append(placeElement);

}

addPlaceCard();


//When click button create
addPlaceBtn.addEventListener('click', function(){
  const titlePlace = document.querySelector(".form_container__input_type_title");
  const linkImage = document.querySelector(".form_container__input_type_link");

  addPlaceCard(titlePlace.value, linkImage.value);

  console.log(titlePlace.value,linkImage.value);
  // titlePlace.value = "";
  // linkImage.value = "";

  // console.log(titlePlace.value,linkImage.value);
});

const delBtn = document.querySelector('.place__delete');
delBtn.addEventListener("click", function () {
  const place = document.querySelector('.place');

  place.remove(); 
  
});
