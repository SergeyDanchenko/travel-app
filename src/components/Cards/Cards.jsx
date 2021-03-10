import React from 'react';
import CountryCard from '../CountryCard/CountryCard';
import uk from '../../assets/images/london1.jpg';
import italy from '../../assets/images/italy1.jpg';
import belarus from '../../assets/images/belarus1.jpg';
import germany from '../../assets/images/germany1.jpg';
import france from '../../assets/images/france1.jpg';
import egypt from '../../assets/images/egypt1.jpg';
import usa from '../../assets/images/usa1.jpg';
import switzerland from '../../assets/images/switzerland1.jpg';

import './Cards.scss';

const Cards = () => {
  return (
    <div className='cards-wrapper'>
      <CountryCard countryImg={uk} country='United Kingdom' capital='London'/>
      <CountryCard countryImg={italy} country='Italy' capital='Rome'/>
      <CountryCard countryImg={belarus} country='Belarus' capital='Minsk'/>
      <CountryCard countryImg={germany} country='Germany' capital='Berlin'/>
      <CountryCard countryImg={france} country='France' capital='Paris'/>
      <CountryCard countryImg={egypt} country='Egypt' capital='Cairo'/>
      <CountryCard countryImg={usa} country='USA' capital='Washington'/>
      <CountryCard countryImg={switzerland} country='Switzerland' capital='Bern'/>
    </div>
  );
};

export default Cards;