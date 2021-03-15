import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reduser from './reducer/reducer';
import './i18n';

import 'bootstrap/dist/css/bootstrap.min.css';
import "react-image-gallery/styles/scss/image-gallery.scss";
import './index.scss';


const store = createStore(reduser);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Suspense fallback='loading'>
                <App />
            </Suspense>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
