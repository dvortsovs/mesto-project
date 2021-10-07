const container = document.querySelector('.page');
const editButton = container.querySelector('.profile__edit-button');
const closeButton = container.querySelector('.popup__close-button');
const editPopup = container.querySelector('.popup');

function showHidePopup(popup) {
  console.log(popup)
  popup.classList.toggle('popup_opened');
}

editButton.addEventListener('click', () => showHidePopup(editPopup));
closeButton.addEventListener('click', () => showHidePopup(editPopup))
