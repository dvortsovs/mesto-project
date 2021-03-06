import './index.css';
import {enableValidation, toggleButtonState} from "../components/validate.js";
import {validateConfig, config} from "../components/constants.js";
import {getProfileInfo} from "../components/utils.js";
import {
  showPopup,
  hidePopup,
  handleEditFormSubmit,
  handleAddFormSubmit,
  handleAvatarFormSubmit,
  popups,
  addPopup,
  editPopup,
  avatarPopup,
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
const avatarButton = container.querySelector('.avatar__edit');
const avatarForm = document.forms.avatar;
const addCardForm = document.forms.add;
const addCardInputList = Array.from(addCardForm.querySelectorAll(validateConfig.inputSelector));
const addCardButtonElement = addCardForm.querySelector(validateConfig.submitButtonSelector);
const avatarInputList = Array.from(avatarForm.querySelectorAll(validateConfig.inputSelector));
const avatarButtonElement = avatarForm.querySelector(validateConfig.submitButtonSelector);


getProfileInfo(config, config.urls.userInfo, profileName, profileCaption);

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
  toggleButtonState(addCardInputList, addCardButtonElement, validateConfig);
  showPopup(addPopup);
});

avatarButton.addEventListener('click', function () {
  toggleButtonState(avatarInputList, avatarButtonElement, validateConfig);
  showPopup(avatarPopup);
});

editForm.addEventListener('submit',(evt) => handleEditFormSubmit(evt, config, config.urls.userInfo));
addForm.addEventListener('submit', (evt) => handleAddFormSubmit(evt, config, config.urls.cards));
avatarForm.addEventListener('submit', (evt) => handleAvatarFormSubmit(evt, config, config.urls.avatar));
