import CountryPageHeader from './../Header/CountryPageHeader/CountryPageHeader'
import CountryInfo from './Description/CountryInfo'
import CountryGallery from './Gallery/CountryGallery'
import CountryMovie from './Movie/CountryMovie'
import CountryMap from './Map/CountryMap'
import { connect } from 'react-redux';
import { getCountryObjectById } from '../../helpFunctions/helpFunctions';
import { Container } from 'react-bootstrap';


function CountryPage({ countryObj }) {
    return (
        <div>
            <CountryPageHeader />
            <Container>
                <CountryInfo 
                    countryImg={countryObj.imageUrl}
                    ISOCode={countryObj.ISOCode}
                />
                <CountryGallery 
                    ISOCode={countryObj.ISOCode}
                />
                <CountryMovie countryMovie={countryObj.videoUrl}/>
                <CountryMap countryObj={countryObj}/>
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        countryObj: getCountryObjectById(state.countriesData, state.pickedCountryCardId),
    };
};

export default connect(mapStateToProps)(CountryPage);