import {queryGetRequests, queryPatchRequests} from "./api.js";
import {addCard, renderCard} from "./card.js";

const avatarElement = document.querySelector('.avatar')

function getProfileInfo(config, url, profileName, profileCaption) {
  queryGetRequests(config, url)
    .then((res) => {
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
        renderCard(addCard(card.name, card.link))
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

function getAvatar(avatar, avatarElement) {
  avatarElement.style.backgroundImage = `url(${avatar})`
}

export {getProfileInfo, getCards, setProfileInfo}
