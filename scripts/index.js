const container = document.querySelector('.page');
const editButton = container.querySelector('.profile__edit-button');
const saveButton = container.querySelector('.popup__save-button');
const closeButton = container.querySelector('.popup__close-button');
const editPopup = container.querySelector('.popup');
const profileName = container.querySelector('.profile__name');
const profileCaption = container.querySelector('.profile__caption');
const inputName = container.querySelector('input[name=name]');
const inputCaption = container.querySelector('input[name=caption]');

function saveProfile() {
  profileName.textContent = inputName.value;
  profileCaption.textContent = inputCaption.value;
  showHidePopup(editPopup);
}

function showHidePopup(popup) {
  popup.classList.toggle('popup_opened');
}

editButton.addEventListener('click', function () {
  inputName.value = profileName.textContent;
  inputCaption.value = profileCaption.textContent;
  showHidePopup(editPopup);
});
closeButton.addEventListener('click', () => showHidePopup(editPopup));
saveButton.addEventListener('click', () => saveProfile());
