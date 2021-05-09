import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import {Provider} from 'react-redux';
import Store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/animate.min.css';

// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import 'fontsource-roboto';

ReactDOM.render(
    <Provider store={Store}>
      <App />
    </Provider>,

    document.getElementById('root'),
);
