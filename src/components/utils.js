import {queryGetRequests, queryPatchRequests, queryPostRequests} from "./api.js";
import {addCard, renderCard} from "./card.js";

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
      res.forEach((card) => {
        renderCard(addCard(card.name, card.link, card.likes.length, card.owner._id, config.userId))
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
      renderCard(addCard(res.name, res.link));
    })
    .catch((err) => console.log(err))
}

function getAvatar(avatar, avatarElement) {
  avatarElement.style.backgroundImage = `url(${avatar})`
}

export {getProfileInfo, getCards, setProfileInfo, postNewCard}
