// open and close popup
const edit = document.querySelector('.button_profile_type_edit');
const popup = document.querySelector('.modal_container');
const closeBtn = popup.querySelector('.modal_container__close');

function addClassPopup(){
  popup.classList.add('modal_container_state_opened');
}

function removeClassPopup(){
  popup.classList.remove('modal_container_state_opened');
}

edit.addEventListener('click', addClassPopup);
closeBtn.addEventListener('click', removeClassPopup);

// recover and write the inputs
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

  removeClassPopup();
}

formElement.addEventListener('submit', handleProfileFormSubmit); 
