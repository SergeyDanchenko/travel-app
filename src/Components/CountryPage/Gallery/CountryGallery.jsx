import React from 'react';
import ImageGallery from 'react-image-gallery';
import './CountryGallery.scss'
import { useTranslation } from "react-i18next";

function CountryGallery({ ISOCode }) {
  const { t } = useTranslation();
  const countryImgGallery = t(`countries.${ISOCode}.imageGallery`, { returnObjects: true });

  return (
    <ImageGallery items={countryImgGallery} />
  )
}

export default CountryGallery;