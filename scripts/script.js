// open and close popup Edit
const edit = document.querySelector('.button_profile_type_edit');
const editPopup = document.querySelector('.modal_container_type_edit');
const closeBtnEdit = editPopup.querySelector('.modal_container__close');

function addClassEditPopup(){
  editPopup.classList.add('modal_container_state_opened'); 
}

function removeClassEditPopup(){
  editPopup.classList.remove('modal_container_state_opened');
}

edit.addEventListener('click', addClassEditPopup);
closeBtnEdit.addEventListener('click', removeClassEditPopup);

// open and close popup Add
const addPlace = document.querySelector('.button_profile_type_add');
const addPopup = document.querySelector('.modal_container_type_add');
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
  console.log(nameInput.value + ' ' + aboutInput.value);

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

  const placeArticle = document.createElement('article');
  placeArticle.classList.add('place');

  const placeImage = document.createElement('div');
  placeImage.classList.add('place__image');

  const img = document.createElement('img');
  img.classList.add('place__img_content')
  img.src = initialCards[i].link;
  placeImage.append(img);

  const placeDelete = document.createElement('submit');
  placeDelete.classList.add('place__delete');
  placeDelete.addEventListener('click', function(){
    placeArticle.remove();
  });

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
  placeLikeIcon.addEventListener('click', function(){
    placeLikeIcon.classList.toggle('place__like_icon_state_active');
  });
  placeButton.append(placeLikeIcon);
  placeBody.append(placeTitle,placeButton);

  placeArticle.append(placeImage, placeDelete, placeBody);
  places.append(placeArticle);
}

// array cards
function addPlaceCard(nameValue, linkValue){
  //Place article
  const placeContainer = document.querySelector('#place').content;
  const placeElement = placeContainer.querySelector('.place').cloneNode(true);

  placeElement.querySelector('.title').textContent = nameValue;
  placeElement.querySelector('.place__img_content').src = linkValue; 

  places.prepend(placeElement);

}

//When click button create
const formElementCreate = document.querySelector('.form_container__form_action_create');
formElementCreate.addEventListener('submit', function(evt){

  evt.preventDefault();

  const titlePlace = document.querySelector(".form_container__input_type_title");
  const linkImage = document.querySelector(".form_container__input_type_link");

  addPlaceCard(titlePlace.value, linkImage.value);

  titlePlace.value = "";
  linkImage.value = "";

  const addLike = places.querySelector('.place__like_icon');
  addLike.addEventListener('click', function(){
    addLike.classList.toggle('place__like_icon_state_active');
  });

  const deleteButton = places.querySelector('.place__delete');
  deleteButton.addEventListener('click', function(evt){
    const place = evt.target.closest('.place');

    place.remove();
  });

  const imgElement = places.querySelector('.place__image');
  imgElement.addEventListener('click', function(){
    const popupImgContainer = document.querySelector('.modal_container__wrapper_type_img');
    const popupImgElement = popupImgContainer.querySelector('.modal_container__modal_type_img');
    const place = places.querySelector('.place');

    const linkElem = place.querySelector('.place__img_content');
    const linkSrc = linkElem.src;
    popupImgElement.querySelector('.modal_image').src = linkSrc;

    const titleElem = place.querySelector('.title');
    const titleText = titleElem.textContent;
    popupImgElement.querySelector('.modal_container__title').textContent = titleText;

    openImgPopup();
  });
 

  removeClassAddPopup();
});

//open image popup
const openImages = places.querySelectorAll('.place__image');
const imgPopup = document.querySelector('.modal_container_type_img');

function openImgPopup(){ 
  imgPopup.classList.add('modal_container_state_opened'); 
}

function createImage(evt){
  const imgCloseEvt = evt.target.closest('.place');

  const popupImgContainer = document.querySelector('.modal_container__wrapper_type_img');
  const popupImgElement = popupImgContainer.querySelector('.modal_container__modal_type_img');

  const linkElem = imgCloseEvt.querySelector('.place__img_content');
  const linkSrc = linkElem.src;
  popupImgElement.querySelector('.modal_image').src = linkSrc;

  const titleElem = imgCloseEvt.querySelector('.title');
  const titleText = titleElem.textContent;
  popupImgElement.querySelector('.modal_container__title').textContent = titleText;
}

const allImgElement = places.querySelectorAll('.place__image');
allImgElement.forEach(function (openImg) {
  openImg.addEventListener('click', createImage);
});

const alltitleValueElement = places.querySelectorAll('.place__img_content');
alltitleValueElement.forEach(function (titleValue) {
  titleValue.addEventListener('click', openImgPopup);
});

const closeBtnImg = imgPopup.querySelector('.modal_container__close');
const removeClassImgPopup = function(){
  imgPopup.classList.remove('modal_container_state_opened');
}
  
closeBtnImg.addEventListener('click', removeClassImgPopup);



