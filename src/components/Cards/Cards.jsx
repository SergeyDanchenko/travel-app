import React from 'react';
import CountryCard from '../CountryCard/CountryCard';

import './Cards.scss';

const Cards = () => {
  return (
    <div className='cards-wrapper'>
      <CountryCard country='United Kingdom' capital='London'/>
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
    </div>
  );
};

export default Cards;