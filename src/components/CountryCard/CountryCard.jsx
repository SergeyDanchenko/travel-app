import React from 'react';
import counrty from '../../assets/images/london1.jpg'

import './CountryCard.scss';

const CountryCard = (props) => {

  const style = {
    backgroundImage: `url(${counrty})`,
  };

  return (
    <div className='country-card-wrapper'>
      <div className='country-img' style={style}/>
      <div class='title-wrapper'>
        <div className="title">{props.country}</div>
        <div className="subtitle">{props.capital}</div>
      </div>
    </div>
  );
};

export default CountryCard;