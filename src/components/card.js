import {showPopup} from "./modal.js";

const elementsList = document.querySelector('.elements__list');
const imagePopup = document.querySelector('.popup_type_image');
const srcPopupImage = imagePopup.querySelector('.popup__image');
const titlePopupImage = imagePopup.querySelector('.popup__title');

function addCard(title, src, counter, cardCreator, userId) {
  const cardTemplate = document.querySelector('#content-card').content;
  const cardElement = cardTemplate.querySelector('.content-card').cloneNode(true);
  const cardImage = cardElement.querySelector('.content-card__image');
  const deleteBtn = cardElement.querySelector('.content-card__delete-button');

  cardElement.querySelector('.content-card__title').textContent = title;
  cardElement.querySelector('.content-card__like-counter').textContent = counter;
  cardImage.src = src;
  cardImage.alt = title;
  cardImage.addEventListener('click', function () {
    srcPopupImage.src = src;
    srcPopupImage.alt = title;
    titlePopupImage.textContent = title;
    showPopup(imagePopup);
  });
  cardElement.querySelector('.content-card__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('content-card__like-button_active');
  });
  if (!(cardCreator === userId)) {
    deleteBtn.remove()
  } else {
    deleteBtn.addEventListener('click', () => cardElement.remove());
  }
  return cardElement;
}

function renderCard(card) {
  elementsList.append(card);
}

export {renderCard, addCard, imagePopup}
