import Cards from './Components/Cards/Cards';
import Footer from './Components/Footer/Footer';
import CountryPage from './Components/CountryPage/CountryPage';
import {HashRouter as Router, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div>
      <Router>
        <Route exact path='/' component={Cards} />
        <Route path='/country' component={CountryPage} />      
      </Router>
      <Footer />
    </div>
  );
}

export default App;