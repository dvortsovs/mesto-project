import './index.css';
import {enableValidation, toggleButtonState} from "../components/validate.js";
import {validateConfig, config} from "../components/constants.js";
import {renderCard, addCard} from "../components/card.js";
import {getProfileInfo, getCards} from "../components/utils.js";
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
} from "../components/modal.js";

const container = document.querySelector('.page');
const editButton = container.querySelector('.profile__edit-button');
const addButton = container.querySelector('.profile__add-button');
const form = document.forms.add;
const inputList = Array.from(form.querySelectorAll(validateConfig.inputSelector));
const buttonElement = form.querySelector(validateConfig.submitButtonSelector);

getProfileInfo(config, config.urls.userInfo, profileName, profileCaption);
getCards(config, config.urls.cards)


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
  toggleButtonState(inputList, buttonElement, validateConfig);
  showPopup(addPopup);
});

editForm.addEventListener('submit', handleEditFormSubmit);
addForm.addEventListener('submit', (evt) => handleAddFormSubmit(evt, renderCard, addCard, showPopup));
