import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './components/Cards/Cards';
import {Container} from 'react-bootstrap';
import CountryCard from './components/CountryCard/CountryCard';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <Container>
      <Cards />
      <Footer />
    </Container>
  );
}

export default App;