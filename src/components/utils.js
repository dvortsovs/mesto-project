import {queryGetRequests} from "./api.js";

function getProfileInfo(config, url, profileName, profileCaption) {
  queryGetRequests(config, url)
    .then((res) => {
      profileName.textContent = res.name;
      profileCaption.textContent = res.about;
    })
}

export {getProfileInfo}
