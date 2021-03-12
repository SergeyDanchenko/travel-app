import Cards from './components/Cards/Cards';
import {Container} from 'react-bootstrap';
import Footer from './components/Footer/Footer';
import CountryPage from './components/CountryPage/CountryPage';
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