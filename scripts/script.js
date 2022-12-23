const wrapper = document.querySelector('.modal_container__wrapper');

// open and close popup Edit
const edit = document.querySelector('.button_profile_type_edit');
const editPopup = document.querySelector('.modal_container__edit');
const closeBtnEdit = editPopup.querySelector('.modal_container__close');

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
const addPlace = document.querySelector('.button_profile_type_add');
const addPopup = document.querySelector('.modal_container__add');
const closeBtnAdd = addPopup.querySelector('.modal_container__close');

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

// Add cards to places
const places = document.querySelector('.places');

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

for (let i = 0; i < initialCards.length; i++){
  // console.log(initialCards[i].name + ' ' + initialCards[i].link);

  const placeArticle = document.createElement('div');
  placeArticle.classList.add('place');

  const placeImage = document.createElement('div');
  placeImage.classList.add('place__image');

  const img = document.createElement('img');
  img.src = initialCards[i].link;
  placeImage.append(img);

  const placeDelete = document.createElement('submit');
  placeDelete.classList.add('place__delete');

  const placeDeleteIcon = document.createElement('span');
  placeDeleteIcon.classList.add('place__delete_icon');
  placeDelete.append(placeDeleteIcon);

  const placeBody = document.createElement('div');
  placeBody.classList.add('place__body');

  const placeTitle = document.createElement('h2');
  placeTitle.classList.add('title');
  placeTitle.textContent = initialCards[i].name;

  const placeButton = document.createElement('button');
  placeButton.classList.add('place__button');

  const placeLikeIcon = document.createElement('span');
  placeLikeIcon.classList.add('place__like_icon');
  placeButton.append(placeLikeIcon);
  placeBody.append(placeTitle,placeButton);

  placeArticle.append(placeImage, placeDelete, placeBody);
  places.append(placeArticle);
}

// Like button
const addLike = function (evt) {
  evt.target.classList.toggle('place__like_icon_state_active');
};

const likeActive = document.querySelectorAll('.place__like_icon');
likeActive.forEach(function (likeActive) {
  likeActive.addEventListener('click', addLike);
});

// array cards
const addPlaceBtn = document.querySelector('.form_container__button');

// function addPlaceCard(nameValue, linkValue){
//   //Place article
//   const placeContainer = document.querySelector('#place').content;
//   const placeElement = placeContainer.querySelector('.place').cloneNode(true);

//   // console.log(placeElement);
//   placeElement.querySelector('.title').textContent = nameValue;
//   placeElement.querySelector('.place__img_content').textContent = linkValue;

//   placeElement.querySelector('.place__like_icon').addEventListener("click", function (evt) {
//     evt.target.classList.toggle('place__like_icon_state_active');
//   }); 

//   places.append(placeElement);

// }

// addPlaceCard();


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

const removePlace = function () {
  console.log('function works');
  const place = document.querySelector('.place');

  place.remove();

};

// Delete place from places
const allDeleteButtons = document.querySelectorAll('.place__delete');
allDeleteButtons.forEach(function (deleteButton) {
  deleteButton.addEventListener('click', removePlace);
});


