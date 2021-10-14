const container = document.querySelector('.page');
const elementsList = container.querySelector('.elements__list')
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

function addCard(title, src) {
  const cardTemplate = container.querySelector('#content-card').content;
  const cardElement = cardTemplate.querySelector('.content-card').cloneNode(true);

  cardElement.querySelector('.content-card__title').textContent = title;
  cardElement.querySelector('.content-card__image').src = src;
  cardElement.querySelector('.content-card__like-button').addEventListener('click', function (evt) {
  evt.target.classList.toggle('content-card__like-button_active')
});
  elementsList.prepend(cardElement);
}

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
  addCard(inputTitle.value, inputLink.value);
  showHidePopup(addPopup);
  inputTitle.value = '';
  inputLink.value = '';
}

editButton.addEventListener('click', function () {
  inputName.value = profileName.textContent;
  inputCaption.value = profileCaption.textContent;
  showHidePopup(editPopup);
});

initialCards.reverse().forEach(item => addCard(item.name, item.link));

addButton.addEventListener('click', () => showHidePopup(addPopup));
closeEditPopup.addEventListener('click', () => showHidePopup(editPopup));
closeAddPopup.addEventListener('click', () => showHidePopup(addPopup));
editForm.addEventListener('submit', editFormSubmitHandler);
addForm.addEventListener('submit', addFormSubmitHandler);
