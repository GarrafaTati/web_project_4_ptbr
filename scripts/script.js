// open and close popup Edit
const edit = document.querySelector('.button_type_edit');
const editPopup = document.querySelector('.modal_type_edit');
const closeBtnEdit = editPopup.querySelector('.modal__close');

function addClassEditPopup(){
  editPopup.classList.add('modal_state_opened'); 
}

function removeClassEditPopup(){
  editPopup.classList.remove('modal_state_opened');
}

edit.addEventListener('click', addClassEditPopup);
closeBtnEdit.addEventListener('click', removeClassEditPopup);

// open and close popup Add
const addPlace = document.querySelector('.button_type_add');
const addPopup = document.querySelector('.modal_type_add');
const closeBtnAdd = addPopup.querySelector('.modal__close');

function addClassAddPopup(){
  addPopup.classList.add('modal_state_opened'); 
}

function removeClassAddPopup(){
  addPopup.classList.remove('modal_state_opened');
}

addPlace.addEventListener('click', addClassAddPopup);
closeBtnAdd.addEventListener('click', removeClassAddPopup);

// recover and write the inputs Profile
const formElement = document.querySelector('.form__form');

function handleProfileFormSubmit(evt) {

  evt.preventDefault();

  const nameInput = formElement.querySelector('.form__input_type_name');
  const aboutInput = formElement.querySelector('.form__input_type_about');

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

initialCards.forEach(function (item) {
  const placeArticle = document.createElement('article');
  placeArticle.classList.add('place');

  const placeImage = document.createElement('div');
  placeImage.classList.add('place__image');

  const img = document.createElement('img');
  img.classList.add('place__img')
  img.src = item.link;
  placeImage.append(img);

  const placeDelete = document.createElement('submit');
  placeDelete.classList.add('place__delete');
  placeDelete.addEventListener('click', function(){
    placeArticle.remove();
  });

  const placeDeleteIcon = document.createElement('span');
  placeDeleteIcon.classList.add('place__deleteicon');
  placeDelete.append(placeDeleteIcon);

  const placeBody = document.createElement('div');
  placeBody.classList.add('place__body');

  const placeTitle = document.createElement('h2');
  placeTitle.classList.add('title');
  placeTitle.textContent = item.name;
  img.alt = item.name;

  const placeButton = document.createElement('button');
  placeButton.classList.add('place__button');

  const placeLikeIcon = document.createElement('span');
  placeLikeIcon.classList.add('place__likeicon');
  placeLikeIcon.addEventListener('click', function(){
    placeLikeIcon.classList.toggle('place__likeicon_state_active');
  });
  placeButton.append(placeLikeIcon);
  placeBody.append(placeTitle,placeButton);

  placeArticle.append(placeImage, placeDelete, placeBody);
  places.append(placeArticle);
});

// array cards
function addPlaceCard(nameValue, linkValue){
  //Place article
  const placeContainer = document.querySelector('#place').content;
  const placeElement = placeContainer.querySelector('.place').cloneNode(true);

  placeElement.querySelector('.title').textContent = nameValue;
  placeElement.querySelector('.place__img').src = linkValue; 
  placeElement.querySelector('.place__img').alt = nameValue; 

  places.prepend(placeElement);

}

//When click button create
const formElementCreate = document.querySelector('.form__form_action_create');
formElementCreate.addEventListener('submit', function(evt){

  evt.preventDefault();

  const titlePlace = document.querySelector(".form__input_type_title");
  const linkImage = document.querySelector(".form__input_type_link");

  addPlaceCard(titlePlace.value, linkImage.value);

  titlePlace.value = "";
  linkImage.value = "";

  const addLike = places.querySelector('.place__likeicon');
  addLike.addEventListener('click', function(){
    addLike.classList.toggle('place__likeicon_state_active');
  });

  const deleteButton = places.querySelector('.place__delete');
  deleteButton.addEventListener('click', function(evt){
    const place = evt.target.closest('.place');

    place.remove();
  });

  const imgElement = places.querySelector('.place__image');
  imgElement.addEventListener('click', function(){
    const popupImgContainer = document.querySelector('.modal__wrapper_type_img');
    const popupImgElement = popupImgContainer.querySelector('.modal__modal_type_img');
    const place = places.querySelector('.place');

    const linkElem = place.querySelector('.place__img');
    const linkSrc = linkElem.src;
    popupImgElement.querySelector('.modal__img').src = linkSrc;

    const titleElem = place.querySelector('.title');
    const titleText = titleElem.textContent;
    popupImgElement.querySelector('.modal__title').textContent = titleText;
    popupImgElement.querySelector('.modal__img').alt = titleText;

    openImgPopup();
  });
 

  removeClassAddPopup();
});

//open image popup
const openImages = places.querySelectorAll('.place__image');
const imgPopup = document.querySelector('.modal_type_img');

function openImgPopup(){ 
  imgPopup.classList.add('modal_state_opened'); 
}

function createImage(evt){
  const imgCloseEvt = evt.target.closest('.place');

  const popupImgContainer = document.querySelector('.modal__wrapper_type_img');
  const popupImgElement = popupImgContainer.querySelector('.modal__modal_type_img');

  const linkElem = imgCloseEvt.querySelector('.place__img');
  const linkSrc = linkElem.src;
  popupImgElement.querySelector('.modal__img').src = linkSrc;

  const titleElem = imgCloseEvt.querySelector('.title');
  const titleText = titleElem.textContent;
  popupImgElement.querySelector('.modal__title').textContent = titleText;
  popupImgElement.querySelector('.modal__img').alt = titleText;
}

const allImgElement = places.querySelectorAll('.place__image');
allImgElement.forEach(function (openImg) {
  openImg.addEventListener('click', createImage);
});

const allTitleValueElement = places.querySelectorAll('.place__img');
allTitleValueElement.forEach(function (titleValue) {
  titleValue.addEventListener('click', openImgPopup);
});

const closeBtnImg = imgPopup.querySelector('.modal__close');
const removeClassImgPopup = function(){
  imgPopup.classList.remove('modal_state_opened');
}
  
closeBtnImg.addEventListener('click', removeClassImgPopup);



