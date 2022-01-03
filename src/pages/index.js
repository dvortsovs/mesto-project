import './index.css';
import {enableValidation, toggleButtonState} from "../components/validate";
import {initialCards, validateConfig} from "../components/constants";
import {renderCard, addCard} from "../components/card";
import {
  showPopup,
  hidePopup,
  handleEditFormSubmit,
  handleAddFormSubmit,
  popups,
  addPopup,
  editPopup,
  addForm,
  editForm,
  inputName,
  inputCaption,
  profileCaption,
  profileName
} from "../components/modal";

const container = document.querySelector('.page');
const editButton = container.querySelector('.profile__edit-button');
const addButton = container.querySelector('.profile__add-button');

initialCards.reverse().forEach(item => renderCard(addCard(item.name, item.link, showPopup)));

enableValidation(validateConfig);

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      hidePopup(popup);
    }
    if (evt.target.classList.contains('popup__close-button')) {
      hidePopup(popup);
    }
  });
});

editButton.addEventListener('click', function () {
  inputName.value = profileName.textContent;
  inputCaption.value = profileCaption.textContent;
  showPopup(editPopup);
});

addButton.addEventListener('click', function () {
  const form = document.forms.add;
  const inputList = Array.from(form.querySelectorAll(validateConfig.inputSelector));
  const buttonElement = form.querySelector(validateConfig.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, validateConfig);
  showPopup(addPopup);
});

editForm.addEventListener('submit', handleEditFormSubmit);
addForm.addEventListener('submit', (evt) => handleAddFormSubmit(evt, renderCard, addCard, showPopup));
