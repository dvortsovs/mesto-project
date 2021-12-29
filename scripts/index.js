const container = document.querySelector('.page');
const elementsList = container.querySelector('.elements__list');
const editButton = container.querySelector('.profile__edit-button');
const saveButton = container.querySelector('.popup__save-button');
const addButton = container.querySelector('.profile__add-button');
const editPopup = container.querySelector('.popup_type_edit');
const addPopup = container.querySelector('.popup_type_add');
const imagePopup = container.querySelector('.popup_type_image');
const closeEditPopup = editPopup.querySelector('.popup__close-button');
const closeAddPopup = addPopup.querySelector('.popup__close-button');
const closeImagePopup = imagePopup.querySelector('.popup__close-button');
const profileName = container.querySelector('.profile__name');
const profileCaption = container.querySelector('.profile__caption');
const editForm = editPopup.querySelector('.popup__form');
const inputName = editForm.querySelector('.popup__input_type_name');
const inputCaption = editForm.querySelector('.popup__input_type_caption');
const addForm = addPopup.querySelector('.popup__form');
const inputTitle = addForm.querySelector('.popup__input_type_title');
const inputLink = addForm.querySelector('.popup__input_type_link');
const srcPopupImage = imagePopup.querySelector('.popup__image');
const titlePopupImage = imagePopup.querySelector('.popup__title');

function addCard(title, src) {
  const cardTemplate = container.querySelector('#content-card').content;
  const cardElement = cardTemplate.querySelector('.content-card').cloneNode(true);

  cardElement.querySelector('.content-card__title').textContent = title;
  cardElement.querySelector('.content-card__image').src = src;
  cardElement.querySelector('.content-card__image').addEventListener('click', function () {
    srcPopupImage.src = src;
    titlePopupImage.textContent = title;
    showPopup(imagePopup);
  });
  cardElement.querySelector('.content-card__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('content-card__like-button_active');
});
  cardElement.querySelector('.content-card__delete-button').addEventListener('click', () => cardElement.remove());
  return cardElement;
}

function renderCard(card) {
  elementsList.prepend(card);
}

function showPopup(popup) {
  popup.classList.add('popup_opened');
}

function hidePopup(popup) {
  popup.classList.remove('popup_opened');
}

function editFormSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileCaption.textContent = inputCaption.value;
  hidePopup(editPopup);
}

function addFormSubmitHandler(evt) {
  evt.preventDefault();
  renderCard(addCard(inputTitle.value, inputLink.value));
  hidePopup(addPopup);
  inputTitle.value = '';
  inputLink.value = '';
}

function showInputError(formElement, inputElement, errorMessage) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('popup__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input-error_active');
}

function hideInputError(formElement, inputElement) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('popup__input_type_error');
  errorElement.classList.remove('popup__input-error_active');
  errorElement.textContent = '';
}

function checkInputValidity(formElement, inputElement) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
}

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function toggleButtonState(inputList, buttonElement) {
  if(hasInvalidInput(inputList)) {
    buttonElement.classList.add('popup__save-button_disabled');
    buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.classList.remove('popup__save-button_disabled');
    buttonElement.removeAttribute('disabled');
  }
}

function setEventListeners(formElement) {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const buttonElement = formElement.querySelector('.popup__save-button');
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
}

function enableValidation(popup) {
  const formList = Array.from(popup.querySelectorAll('.popup__form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    const fieldsetList = Array.from(formElement.querySelectorAll('.popup__input-container'));
    fieldsetList.forEach((fieldSet) => {
      setEventListeners(fieldSet);
    });
  });
}



initialCards.reverse().forEach(item => renderCard(addCard(item.name, item.link)));

editButton.addEventListener('click', function () {
  inputName.value = profileName.textContent;
  inputCaption.value = profileCaption.textContent;
  showPopup(editPopup);
  enableValidation(editPopup);
});
addButton.addEventListener('click', () => {
  showPopup(addPopup);
  enableValidation(addPopup);
});

closeEditPopup.addEventListener('click', () => hidePopup(editPopup));
closeAddPopup.addEventListener('click', () => hidePopup(addPopup));
closeImagePopup.addEventListener('click', () => hidePopup(imagePopup));
editForm.addEventListener('submit', editFormSubmitHandler);
addForm.addEventListener('submit', addFormSubmitHandler);
