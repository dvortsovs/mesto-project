import {setProfileInfo, postNewCard, deleteCard, setAvatar, showLoading} from "./utils.js";
import {config} from "./constants.js";

const popups = document.querySelectorAll('.popup');
const editPopup = document.querySelector('.popup_type_edit');
const addPopup = document.querySelector('.popup_type_add');
const confirmPopup = document.querySelector('.popup_type_confirm');
const avatarPopup = document.querySelector('.popup_type_avatar');
const addForm = addPopup.querySelector('.popup__form');
const inputTitle = addForm.querySelector('.popup__input_type_title');
const inputLink = addForm.querySelector('.popup__input_type_link');
const editForm = editPopup.querySelector('.popup__form');
const avatarForm = avatarPopup.querySelector('.popup__form');
const avatarInput = avatarForm.querySelector('.popup__input_type_avatar');
const inputName = editForm.querySelector('.popup__input_type_name');
const inputCaption = editForm.querySelector('.popup__input_type_caption');
const profileName = document.querySelector('.profile__name');
const profileCaption = document.querySelector('.profile__caption');
const confirmButton = confirmPopup.querySelector('.popup__save-button_type_confirm');
const editSaveBtn = editPopup.querySelector('.popup__save-button');
const addSaveBtn = addPopup.querySelector('.popup__save-button');
const avatarSaveBtn = avatarPopup.querySelector('.popup__save-button');

function showPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc);
}

function hidePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsc);
}

function handleEditFormSubmit(evt, config, url) {
  evt.preventDefault();
  const originalText = editSaveBtn.textContent;
  showLoading(true, editSaveBtn, '');
  const forms = {
    name: inputName.value,
    about: inputCaption.value
  };
  setProfileInfo(config, url, forms, profileName, profileCaption, editPopup, editSaveBtn, originalText);
}

function handleConfirmPopup(cardId, cardElement) {
  showPopup(confirmPopup);
  confirmButton.addEventListener('click', () => deleteCard(
    config, config.urls.cards, cardId, confirmPopup, cardElement
    )
  );
}

function handleAddFormSubmit(evt, config, url) {
  evt.preventDefault();
  const originalText = addSaveBtn.textContent;
  showLoading(true, addSaveBtn, '')
  const forms = {
    name: inputTitle.value,
    link: inputLink.value
  };
  postNewCard(config, url, forms, addPopup, addSaveBtn, originalText);
}

function handleAvatarFormSubmit(evt, config, url) {
  evt.preventDefault();
  const originalText = avatarSaveBtn.textContent;
  showLoading(true, avatarSaveBtn, '');
  const form = {
    avatar: avatarInput.value
  };
  setAvatar(config, url, form, avatarPopup, avatarSaveBtn, originalText);
}

function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    hidePopup(document.querySelector('.popup_opened'));
  }
}

export {
  showPopup,
  hidePopup,
  handleEditFormSubmit,
  handleAddFormSubmit,
  handleAvatarFormSubmit,
  handleConfirmPopup,
  closeByEsc,
  popups,
  addPopup,
  editPopup,
  avatarPopup,
  addForm,
  editForm,
  avatarForm,
  inputCaption,
  inputName,
  profileName,
  profileCaption
}
