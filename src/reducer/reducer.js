import countriesData from '../assets/countriesData';

const initialState = {
  countriesData: countriesData,
  pickedCountryCardId: null,
};

export default function reduser(state = initialState, action) {

  if (action.type === 'ON_COUNTRY_CARD_CLICK') {
    state.pickedCountryCardId = action.payload;
  }

  return state;
};