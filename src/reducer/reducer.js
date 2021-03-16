import countriesData from '../assets/countriesData';

const initialState = {
  countriesData: countriesData,
  pickedCountryCardId: localStorage.getItem('pickedCountryCardId') || null,
  language: localStorage.getItem('lang') || 'en',
};

export default function reduser(state = initialState, { type, payload }) {

  const newState = JSON.parse(JSON.stringify(state));

  if (type === 'ON_COUNTRY_CARD_CLICK') {
    newState.pickedCountryCardId = payload;
  }

  if (type === 'ON_LANGUAGE_CHANGE') {
    newState.language = payload;
  }

  return newState;
};