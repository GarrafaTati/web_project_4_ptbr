// open and close popup
let edit = document.querySelector('.button_profile_type_edit');
let popup = document.querySelector('.modal_container');
let closeBtn = popup.querySelector('.modal_container__close');

function addClassPopup(){
  popup.classList.add('modal_container_state_opened');
}

function removeClassPopup(){
  popup.classList.remove('modal_container_state_opened');
}

edit.addEventListener('click', addClassPopup);
closeBtn.addEventListener('click', removeClassPopup);

// recover and write the inputs
let formElement = document.querySelector('.form_container__form');

function handleProfileFormSubmit(evt) {

  evt.preventDefault();
  
  let popup = document.querySelector('.modal_container');

    // Vamos encontrar os campos de formulário do DOM
  let nameInput = popup.querySelector('.form_container__input_type_name');
  let aboutInput = popup.querySelector('.form_container__input_type_about');

  // Pegue os valores de cada campo do valor de propriedade correspondente
  let nameValue = nameInput.value;
  let aboutValue = aboutInput.value;

  console.log('This is my input value name: ' + nameValue);
  console.log('This is my input value about: ' + aboutValue);

  // Selecione elementos onde os valores de campo serão inseridos
  let nameProfile = document.querySelector('.profile__name');
  let aboutProfile = document.querySelector('.profile__aboutme');

  // Insira novos valores usando textContent
  // propriedade do método querySelector()
  nameValue.textContent = nameProfile;
  aboutValue.textContent = aboutProfile;

  console.log('This is my name profile: ' + nameProfile.value);
  console.log('This is my about me profile: ' + aboutProfile.value);
}

// Conecte o handler ao formulário:
// ele vai observar o evento de submit
formElement.addEventListener('submit', handleProfileFormSubmit); 
