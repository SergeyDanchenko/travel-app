import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CountryPage from './components/CountryPage/CountryPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-image-gallery/styles/scss/image-gallery.scss";

import './index.scss';

ReactDOM.render(
    <React.StrictMode>
        <App />
        {/* <CountryPage /> */}
    </React.StrictMode>,
    document.getElementById('root')
);