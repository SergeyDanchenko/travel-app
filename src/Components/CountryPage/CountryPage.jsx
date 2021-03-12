import CountryPageHeader from './CountryPageHeader'
import CountryInfo from './Description/CountryInfo'
import CountryGallery from './Gallery/CountryGallery'
import CountryMovie from './Movie/CountryMovie'
import CountryMap from './Map/CountryMap'
import Footer from './../Footer/Footer'
import { connect } from 'react-redux';
import { getCountryObjectById } from '../../helpFunctions/helpFunctions';
import { Container } from 'react-bootstrap';

// import 'bootstrap/dist/css/bootstrap.min.css';

function CountryPage({ countryObj }) {

    console.log(countryObj);

    return (
        <Container>
            {/* Hi */}
            <CountryPageHeader />
            <CountryInfo />
            <CountryGallery />
            <CountryMovie />
            <CountryMap />
            <Footer />
            {/* <div>FOOTER</div> */}
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        countryObj: getCountryObjectById(state.countriesData, state.pickedCountryCardId),
    };
};

export default connect(mapStateToProps)(CountryPage);