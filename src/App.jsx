import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './components/Cards/Cards';
import {Container} from 'react-bootstrap';
import CountryCard from './components/CountryCard/CountryCard';

function App() {

  return (
    <Container>
    <Cards />
    </Container>
  );
}

export default App;