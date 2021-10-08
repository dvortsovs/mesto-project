const container = document.querySelector('.page');
const editButton = container.querySelector('.profile__edit-button');
const saveButton = container.querySelector('.popup__save-button');
const addButton = container.querySelector('.profile__add-button');
const popupList = container.querySelectorAll('.popup');
const editPopup = popupList[0];
const addPopup = popupList[1];
const closeEditPopup = popupList[0].querySelector('.popup__close-button');
const closeAddPopup = popupList[1].querySelector('.popup__close-button');
const profileName = container.querySelector('.profile__name');
const profileCaption = container.querySelector('.profile__caption');
const editForm = popupList[0].querySelector('.popup__form');
const inputName = editForm.querySelector('input[name=name]');
const inputCaption = editForm.querySelector('input[name=caption]');
const addForm = popupList[1].querySelector('.popup__form');
const inputTitle = addForm.querySelector('input[name=title]');
const inputLink = addForm.querySelector('input[name=link]');

function showHidePopup(popup) {
  popup.classList.toggle('popup_opened');
}

function editFormSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileCaption.textContent = inputCaption.value;
  showHidePopup(editPopup);
}

function addFormSubmitHandler(evt) {
  evt.preventDefault();
  showHidePopup(addPopup);
}

editButton.addEventListener('click', function () {
  inputName.value = profileName.textContent;
  inputCaption.value = profileCaption.textContent;
  showHidePopup(editPopup);
});

addButton.addEventListener('click', () => showHidePopup(addPopup));
closeEditPopup.addEventListener('click', () => showHidePopup(editPopup));
closeAddPopup.addEventListener('click', () => showHidePopup(addPopup));
editForm.addEventListener('submit', editFormSubmitHandler);
addForm.addEventListener('submit', addFormSubmitHandler);
