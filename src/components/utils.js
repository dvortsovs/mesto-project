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
    })
    .catch((err) => {
      console.log(`Error: ${err}`)
    });
}

function getCards(config, url) {
  queryGetRequests(config, url)
    .then((res) => {
      res.reverse().forEach((card) => {
        renderCard(addCard(card, config))
      })
    })
}

function setProfileInfo(config, url, body, name, caption) {
  queryPatchRequests(config, url, body)
    .then((res) => {
      name.textContent = res.name;
      caption.textContent = res.about;
    })
    .catch((err) => console.log(`Ошибка ${err}`));
}

function postNewCard(config, url, body) {
  queryPostRequests(config, url, body)
    .then((res) => {
      renderCard(addCard(res, config));
    })
    .catch((err) => console.log(err))
}

function deleteCard(config, url, cardId, popup, cardElement) {
  queryDeleteRequests(config, url, cardId)
    .then(() => {
      hidePopup(popup);
      cardElement.remove();
    })
}

function setAvatar(config, url, body) {
  queryPatchRequests(config, url, body)
    .then((res) => {
      getAvatar(res.avatar, avatarElement);
    })
}

function getAvatar(avatar, avatarElement) {
  avatarElement.style.backgroundImage = `url(${avatar})`
}

export {getProfileInfo, getCards, setProfileInfo, postNewCard, deleteCard, setAvatar}
