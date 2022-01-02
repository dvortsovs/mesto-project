const elementsList = document.querySelector('.elements__list');
const imagePopup = document.querySelector('.popup_type_image');
const srcPopupImage = imagePopup.querySelector('.popup__image');
const titlePopupImage = imagePopup.querySelector('.popup__title');

function addCard(title, src, showPopup, escClose) {
  const cardTemplate = document.querySelector('#content-card').content;
  const cardElement = cardTemplate.querySelector('.content-card').cloneNode(true);

  cardElement.querySelector('.content-card__title').textContent = title;
  cardElement.querySelector('.content-card__image').src = src;
  cardElement.querySelector('.content-card__image').addEventListener('click', function () {
    srcPopupImage.src = src;
    titlePopupImage.textContent = title;
    showPopup(imagePopup);
    document.addEventListener('keydown', escClose)
  });
  cardElement.querySelector('.content-card__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('content-card__like-button_active');
  });
  cardElement.querySelector('.content-card__delete-button').addEventListener('click', () => cardElement.remove());
  return cardElement;
}

function renderCard(card) {
  elementsList.prepend(card);
}

export {renderCard, addCard, imagePopup}
