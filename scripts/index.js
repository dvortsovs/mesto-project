const container = document.querySelector('.page');
const editButton = container.querySelector('.profile__edit-button');
const saveButton = container.querySelector('.popup__save-button');
const closeButton = container.querySelector('.popup__close-button');
const editPopup = container.querySelector('.popup');
const profileName = container.querySelector('.profile__name');
const profileCaption = container.querySelector('.profile__caption');
const formElement = container.querySelector('form[name=edit-profile]');
const inputName = formElement.querySelector('input[name=name]');
const inputCaption = formElement.querySelector('input[name=caption]');

function showHidePopup(popup) {
  popup.classList.toggle('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileCaption.textContent = inputCaption.value;
  showHidePopup(editPopup);
}

editButton.addEventListener('click', function () {
  inputName.value = profileName.textContent;
  inputCaption.value = profileCaption.textContent;
  showHidePopup(editPopup);
});
closeButton.addEventListener('click', () => showHidePopup(editPopup));
formElement.addEventListener('submit', formSubmitHandler);
