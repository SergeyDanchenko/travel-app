import React from 'react';
import { Link } from 'react-router-dom';

import './CountryCard.scss';

const CountryCard = ({country, capital, countryImg, onCardClick, cardId}) => {

  const style = {
    backgroundImage: `url(${countryImg})`,
  };

  const onClick = () => {
    onCardClick(cardId);
  };

  return (
    <Link to='/country'>
      <div className='country-card-wrapper' onClick={onClick}>
        <div className='country-img' style={style} />
        <div className='title-wrapper'>
          <div className="title">{country}</div>
          <div className="subtitle">{capital}</div>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;