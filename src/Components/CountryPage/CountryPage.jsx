import CountryPageHeader from './CountryPageHeader'
import CountryInfo from './CountryInfo'
import CountryGallery from './CountryGallery'
import CountryMovie from './CountryMovie'
import CountryMap from './CountryMap'
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