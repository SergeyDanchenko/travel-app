import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import CountryPage from './Components/CountryPage/CountryPage'
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.scss';

ReactDOM.render(
    <React.StrictMode>
        {/* <App /> */}
        <CountryPage />
    </React.StrictMode>,
    document.getElementById('root')
);