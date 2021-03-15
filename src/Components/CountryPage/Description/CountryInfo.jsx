import { Image } from 'react-bootstrap';
import CountryDescription from './CountryDescription.module.scss';

function CountryInfo({countryName, countryCapital, countryImg, countryInfo }) {

    return (
        <div className={CountryDescription.wrapper}>
            <div className={CountryDescription.photo}>
                <Image src={countryImg} fluid rounded  />
            </div>
            <div className={CountryDescription.name}>{ countryName }</div>
            <div className={CountryDescription.capital}>Capital: { countryCapital }</div>
            <div className={CountryDescription.widgets}>Widgets</div>
            <div className={CountryDescription.info}>{ countryInfo }</div>
        </div>
    )
}

export default CountryInfo;