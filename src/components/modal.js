import {setProfileInfo} from "./utils.js";

const popups = document.querySelectorAll('.popup');
const editPopup = document.querySelector('.popup_type_edit');
const addPopup = document.querySelector('.popup_type_add');
const addForm = addPopup.querySelector('.popup__form');
const inputTitle = addForm.querySelector('.popup__input_type_title');
const inputLink = addForm.querySelector('.popup__input_type_link');
const editForm = editPopup.querySelector('.popup__form');
const inputName = editForm.querySelector('.popup__input_type_name');
const inputCaption = editForm.querySelector('.popup__input_type_caption');
const profileName = document.querySelector('.profile__name');
const profileCaption = document.querySelector('.profile__caption');

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
  const forms = {
    name: inputName.value,
    about: inputCaption.value
  }
  setProfileInfo(config, url, forms, profileName, profileCaption)
  hidePopup(editPopup);
}

function handleAddFormSubmit(evt, renderCard, addCard, showPopup) {
  evt.preventDefault();
  renderCard(addCard(inputTitle.value, inputLink.value, showPopup));
  hidePopup(addPopup);
  evt.target.reset();
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
  closeByEsc,
  popups,
  addPopup,
  editPopup,
  addForm,
  editForm,
  inputCaption,
  inputName,
  profileName,
  profileCaption
}
