import './index.css';
import {enableValidation} from "../components/validate";
import {initialCards, validateConfig} from "../components/constants";
import {renderCard, addCard, imagePopup} from "../components/card";
import {
  showPopup,
  hidePopup,
  editFormSubmitHandler,
  addFormSubmitHandler,
  escClose,
  overlayClose,
  closeAddPopup,
  closeImagePopup,
  closeEditPopup,
  addPopup,
  editPopup,
  addForm,
  editForm,
  inputName,
  inputCaption,
  profileCaption,
  profileName
} from "../components/modal";

const container = document.querySelector('.page');
const editButton = container.querySelector('.profile__edit-button');
const addButton = container.querySelector('.profile__add-button');


initialCards.reverse().forEach(item => renderCard(addCard(item.name, item.link, showPopup, escClose)));

enableValidation(validateConfig);

editButton.addEventListener('click', function () {
  inputName.value = profileName.textContent;
  inputCaption.value = profileCaption.textContent;
  showPopup(editPopup);
  document.addEventListener('keydown', escClose);
});

addButton.addEventListener('click', function () {
  showPopup(addPopup);
  document.addEventListener('keydown', escClose);
});

editPopup.addEventListener('mousedown', overlayClose);
addPopup.addEventListener('mousedown', overlayClose);
imagePopup.addEventListener('mousedown', overlayClose);



closeEditPopup.addEventListener('click', () => hidePopup(editPopup));
closeAddPopup.addEventListener('click', () => hidePopup(addPopup));
closeImagePopup.addEventListener('click', () => hidePopup(imagePopup));
editForm.addEventListener('submit', editFormSubmitHandler);
addForm.addEventListener('submit', (evt) => addFormSubmitHandler(evt, renderCard, addCard));
