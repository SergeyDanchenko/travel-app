import CountryPageHeader from './../Header/CountryPageHeader/CountryPageHeader'
import CountryInfo from './Description/CountryInfo'
import CountryGallery from './Gallery/CountryGallery'
import CountryMovie from './Movie/CountryMovie'
import CountryMap from './Map/CountryMap'
import { connect } from 'react-redux';
import { getCountryObjectById } from '../../helpFunctions/helpFunctions';

function CountryPage({ countryObj }) {
    // console.log(countryObj);
    return (
        <>
            <CountryPageHeader />
            <CountryInfo 
                countryName={countryObj.name}
                countryCapital={countryObj.capital}
                countryImg={countryObj.imageUrl}
                countryInfo={countryObj.description}/>
            <CountryGallery countryImgGallery={countryObj.imageGallery}/>
            <CountryMovie countryMovie={countryObj.videoUrl}/>
            <CountryMap />
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        countryObj: getCountryObjectById(state.countriesData, state.pickedCountryCardId),
    };
};

export default connect(mapStateToProps)(CountryPage);