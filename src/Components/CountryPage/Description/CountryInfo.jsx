import { Container, Image } from 'react-bootstrap';
import CountryDescription from './CountryDescription.module.scss';
import DateAndTime from './../../Widget/dateAndTime'
import CurrencyRate from './../../Widget/rate'

function CountryInfo({countryName, countryCapital, countryImg, widgetsDate, countryInfo }) {
// debugger;

    return (
        <div className={CountryDescription.wrapper}>
            <Container className={CountryDescription.photo}>
                <Image src={countryImg} fluid rounded  />
            </Container>
            <Container className={CountryDescription.name}>{ countryName }</Container>
            <Container className={CountryDescription.capital}>{ countryCapital }</Container>
            <Container className={CountryDescription.widgets}>
                <DateAndTime months = { widgetsDate.nameData } />
                <CurrencyRate rateValue = { widgetsDate.currency }/> 
            </Container>
            <Container className={CountryDescription.info}>{ countryInfo }</Container>
        </div>
    )
}

export default CountryInfo;