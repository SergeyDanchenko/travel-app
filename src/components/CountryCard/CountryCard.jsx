import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import './CountryCard.scss';

const CountryCard = ({ countryImg, onCardClick, cardId, ISOCode}) => {

  const style = {
    backgroundImage: `url(${countryImg})`,
  };

  const { t } = useTranslation();

  const onClick = () => {
    localStorage.setItem('pickedCountryCardId', cardId);
    onCardClick(cardId);
  };

  return (
    <Link to='/country'>
      <div className='country-card-wrapper' onClick={onClick}>
        <div className='country-img' style={style} />
        <div className='title-wrapper'>
          <div className="title">{t(`countries.${ISOCode}.name`)}</div>
          <div className="subtitle">{t(`countries.${ISOCode}.capital`)}</div>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;