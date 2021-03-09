import CountryPageHeader from './CountryPageHeader'
import CountryInfo from './Description/CountryInfo'
import CountryGallery from './Gallery/CountryGallery'
import CountryMovie from './Movie/CountryMovie'
import CountryMap from './Map/CountryMap'
import Footer from './../Footer/Footer'


// import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

function CountryPage() {
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

export default CountryPage;