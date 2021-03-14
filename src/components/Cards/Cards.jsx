import React from 'react';
import CountryCard from '../CountryCard/CountryCard';
import MainPageHeader from '../Header/MainPageHeader/MainPageHeader'

import { connect } from 'react-redux';
import { onCountryCardClick } from '../../actions/actions';

import './Cards.scss';

const Cards = ({ countries, onCardClick }) => {
  return (
    <>
      <MainPageHeader />
      <div className='cards-wrapper'>      
        {countries.map((countryData) => {
          return (
            <CountryCard 
              key={countryData.id} 
              country={countryData.name} 
              capital={countryData.capital} 
              countryImg={countryData.cardImg}
              onCardClick={onCardClick}
              cardId={countryData.id}
            />
          );
        })}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    countries: state.countriesData,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCardClick: (payload) => dispatch(onCountryCardClick(payload)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards);