import { Image } from 'react-bootstrap';
import CountryDescription from './CountryDescription.module.scss';
import { useTranslation } from "react-i18next";

function CountryInfo({countryImg, ISOCode }) {

    const { t } = useTranslation();

    return (
        <div className={CountryDescription.wrapper}>
            <div className={CountryDescription.photo}>
                <Image src={countryImg} fluid rounded  />
            </div>
            <div className={CountryDescription.name}>{ t(`countries.${ISOCode}.name`) }</div>
            <div className={CountryDescription.capital}>{ t('capital') }: { t(`countries.${ISOCode}.capital`) }</div>
            <div className={CountryDescription.widgets}>Widgets</div>
            <div className={CountryDescription.info}>{ t(`countries.${ISOCode}.info`) }</div>
        </div>
    )
}

export default CountryInfo;