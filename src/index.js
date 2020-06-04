import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.js';

// ? import './index.css';
// * we don't need to import ./index.css into index.js, because we already imported
// * the css file into index.html via:
// * <link rel="stylesheet" type="text/css" href="/src/index.css" />
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap';

const wrapper = document.getElementById('root');
wrapper ? ReactDOM.render(<App />, wrapper) : false;
