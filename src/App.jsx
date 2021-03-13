import Cards from './Components/Cards/Cards';
import {Container} from 'react-bootstrap';
import Footer from './Components/Footer/Footer';
import CountryPage from './Components/CountryPage/CountryPage';
import {HashRouter as Router, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <Container>
    <Router>
      <Route path='/home' component={Cards} />
      <Route path='/country' component={CountryPage} />
      {/* <Footer /> */}
    </Router>
    </Container>
  );
}

export default App;