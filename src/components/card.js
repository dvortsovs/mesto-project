import {showPopup, handleConfirmPopup} from "./modal.js";
import {queryDeleteRequests, queryPutRequests} from "./api.js";

const elementsList = document.querySelector('.elements__list');
const imagePopup = document.querySelector('.popup_type_image');
const srcPopupImage = imagePopup.querySelector('.popup__image');
const titlePopupImage = imagePopup.querySelector('.popup__title');

function addCard(card, config) {
  const cardTemplate = document.querySelector('#content-card').content;
  const cardElement = cardTemplate.querySelector('.content-card').cloneNode(true);
  const cardImage = cardElement.querySelector('.content-card__image');
  const deleteBtn = cardElement.querySelector('.content-card__delete-button');
  const likeBtn = cardElement.querySelector('.content-card__like-button');
  const likeCounter = cardElement.querySelector('.content-card__like-counter');

  cardElement.querySelector('.content-card__title').textContent = card.name;
  likeCounter.textContent = card.likes.length;
  cardImage.src = card.link;
  cardImage.alt = card.name;
  cardImage.addEventListener('click', function () {
    srcPopupImage.src = card.link;
    srcPopupImage.alt = card.name;
    titlePopupImage.textContent = card.name;
    showPopup(imagePopup);
  });
  if (checkLike(card, config)) {
    likeBtn.classList.add('content-card__like-button_active');
  }
  let newCardObj = card;
  likeBtn.addEventListener('click', function () {
    if (checkLike(newCardObj, config)) {
      removeLike(config, card)
        .then((res) => {
          newCardObj = res;
          likeCounter.textContent = res.likes.length;
          likeBtn.classList.remove('content-card__like-button_active');
        })
        .catch((err) => {
          console.log(`Error ${err}`);
        });
    } else {
      addLike(config, card)
        .then((res) => {
          newCardObj = res;
          likeCounter.textContent = res.likes.length;
          likeBtn.classList.add('content-card__like-button_active');
        })
        .catch((err) => {
          console.log(`Error ${err}`);
        });
    }
  });
  if (!(card.owner._id === config.userId)) {
    deleteBtn.remove()
  } else {
    deleteBtn.addEventListener('click',() => handleConfirmPopup(card._id, cardElement));
  }
  return cardElement;
}

function renderCard(card) {
  elementsList.prepend(card);
}

function addLike(config, card) {
  return queryPutRequests(config, config.urls.likes, card._id)
}

function removeLike(config, card) {
  return queryDeleteRequests(config, config.urls.likes, card._id)
}

function checkLike(card, config) {
  return card.likes.some((like) => {
    return like._id === config.userId;
  });
}

export {renderCard, addCard, imagePopup}
