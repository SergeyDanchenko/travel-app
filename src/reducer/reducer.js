import countriesData from '../assets/countriesData';

const initialState = {
  countriesData: countriesData,
  pickedCountryCardId: localStorage.getItem('pickedCountryCardId') || null,
  language: localStorage.getItem('lang') || 'en',
  renderCardsIds: ['0', '1', '2', '3', '4', '5', '6', '7'],
  searchInputValue: '',
};

export default function reduser(state = initialState, { type, payload }) {

  const newState = JSON.parse(JSON.stringify(state));

  if (type === 'ON_COUNTRY_CARD_CLICK') {
    newState.pickedCountryCardId = payload;
    newState.searchInputValue = '';
    newState.renderCardsIds = ['0', '1', '2', '3', '4', '5', '6', '7'];
  }

  if (type === 'ON_LANGUAGE_CHANGE') {
    newState.language = payload;
    newState.searchInputValue = '';
    newState.renderCardsIds = ['0', '1', '2', '3', '4', '5', '6', '7'];
  }

  if (type === 'ON_SEARCH_INPUT_CHANGE') {
    newState.searchInputValue = payload;
    const test = newState.countriesData.filter((country) => {
      if (country[`name_${newState.language}`].toLowerCase().includes(payload.toLowerCase()) || country[`capital_${newState.language}`].toLowerCase().includes(payload.toLowerCase())) {
        return true;
      }
      return false;
    });
    newState.renderCardsIds = test.map((country) => country.id);
  }

  return newState;
};