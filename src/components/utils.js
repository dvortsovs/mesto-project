import {queryDeleteRequests, queryGetRequests, queryPatchRequests, queryPostRequests} from "./api.js";
import {addCard, renderCard} from "./card.js";
import {hidePopup} from "./modal.js";

const avatarElement = document.querySelector('.avatar')

function getProfileInfo(config, url, profileName, profileCaption) {
  queryGetRequests(config, url)
    .then((res) => {
      config.userId = res._id;
      profileName.textContent = res.name;
      profileCaption.textContent = res.about;
      getAvatar(res.avatar, avatarElement);
      getCards(config, config.urls.cards);
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    });
}

function getCards(config, url) {
  queryGetRequests(config, url)
    .then((res) => {
      res.reverse().forEach((card) => {
        renderCard(addCard(card, config));
      })
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    });
}

function setProfileInfo(config, url, body, name, caption, popup, btn, originalText) {
  queryPatchRequests(config, url, body)
    .then((res) => {
      name.textContent = res.name;
      caption.textContent = res.about;
      hidePopup(popup);
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    })
    .finally(() => {
      showLoading(false, btn, originalText);
    });
}

function postNewCard(config, url, body, popup, btn, originalText) {
  queryPostRequests(config, url, body)
    .then((res) => {
      renderCard(addCard(res, config));
      hidePopup(popup);
      popup.querySelector('.popup__form').reset();
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    })
    .finally(() => {
      showLoading(false, btn, originalText);
    });
}

function deleteCard(config, url, cardId, cardElement) {
  queryDeleteRequests(config, url, cardId)
    .then(() => {
      cardElement.remove();
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    });
}

function setAvatar(config, url, body, popup, btn, originalText) {
  queryPatchRequests(config, url, body)
    .then((res) => {
      getAvatar(res.avatar, avatarElement);
      hidePopup(popup);
      popup.querySelector('.popup__form').reset();
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    })
    .finally(() => {
      showLoading(false, btn, originalText);
    })
}

function getAvatar(avatar, avatarElement) {
  avatarElement.style.backgroundImage = `url(${avatar})`;
}

function showLoading(isLoading, button, btnText) {
  if (isLoading) {
    button.textContent = 'Сохранение...';
    button.setAttribute('disabled', true);
  } else {
    button.textContent = btnText;
    button.removeAttribute('disabled');
  }
}

export {getProfileInfo, getCards, setProfileInfo, postNewCard, deleteCard, setAvatar, showLoading}
