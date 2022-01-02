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
const closeEditPopup = editPopup.querySelector('.popup__close-button');
const closeAddPopup = addPopup.querySelector('.popup__close-button');
const imagePopup = document.querySelector('.popup_type_image');
const closeImagePopup = imagePopup.querySelector('.popup__close-button');

function showPopup(popup) {
  popup.classList.add('popup_opened');
}

function hidePopup(popup) {
  popup.classList.remove('popup_opened');
  popup.removeEventListener('keydown', escClose);
}

function editFormSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileCaption.textContent = inputCaption.value;
  hidePopup(editPopup);
}

function addFormSubmitHandler(evt, renderCard, addCard) {
  evt.preventDefault();
  renderCard(addCard(inputTitle.value, inputLink.value));
  hidePopup(addPopup);
  evt.target.reset();
}

function overlayClose(evt) {
  if (evt.target === evt.currentTarget) {
    hidePopup(evt.currentTarget);
  }
}

function escClose(evt) {
  if (evt.key === 'Escape') {
    hidePopup(document.querySelector('.popup_opened'));
  }
}

export {
  showPopup,
  hidePopup,
  editFormSubmitHandler,
  addFormSubmitHandler,
  escClose,
  overlayClose,
  closeImagePopup,
  closeEditPopup,
  closeAddPopup,
  addPopup,
  editPopup,
  addForm,
  editForm,
  inputCaption,
  inputName,
  profileName,
  profileCaption
}
