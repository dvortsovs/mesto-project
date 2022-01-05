
const config = {
  userId: '',
  urls: {
    baseUrl: 'https://nomoreparties.co/v1/plus-cohort-5',
    cards: '/cards',
    userInfo: '/users/me'
  },
  headers: {headers:
      {
    authorization: '0ebadb24-8922-4810-85ba-1c7bc357561a',
    'Content-Type': 'application/json'
      }
  }
}

const validateConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  fieldsetSelector: '.popup__input-container',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

export {validateConfig, config};
