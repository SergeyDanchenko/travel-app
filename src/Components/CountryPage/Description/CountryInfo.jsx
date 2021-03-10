import { Container, Image } from 'react-bootstrap';
import CountryDescription from './CountryDescription.module.scss';

import belarusImg from './../../../assets/images/Belarus/belarusImg.jpg'

function CountryInfo() {
    return (
        <div className={CountryDescription.wrapper}>
            <Container className={CountryDescription.photo}>
                <Image src={belarusImg} fluid rounded  />
            </Container>
            <Container className={CountryDescription.name}>Belarus</Container>
            <Container className={CountryDescription.capital}>Minsk</Container>
            <Container className={CountryDescription.widgets}>Widgets</Container>
            <Container className={CountryDescription.info}>Info about</Container>
        </div>
    )
}

export default CountryInfo;