import {queryGetRequests} from "./api.js";
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
    })
}

function getCards(config, url) {
  queryGetRequests(config, url)
    .then((res) => {
      res.forEach((card) => {
        renderCard(addCard(card.name, card.link))
      })
    })
}

function getAvatar(avatar, avatarElement) {
  avatarElement.style.backgroundImage = `url(${avatar})`
}

export {getProfileInfo, getCards}
