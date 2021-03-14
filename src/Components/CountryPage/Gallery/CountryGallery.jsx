import React from 'react';
import ImageGallery from 'react-image-gallery';

function CountryGallery({countryImgGallery}) {
    return (
      <ImageGallery items={countryImgGallery} />
    )  
}

export default CountryGallery;