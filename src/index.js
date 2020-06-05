import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.js';

// ? import './main.css';
// * we don't need to import ./main.css into index.js, because we already imported
// * the css file into index.html via:
// * <link rel="stylesheet" type="text/css" href="/src/main.css" />

// ? import 'bootstrap';
// I'm not importing the entire bootstrap, because I'm already getting the styles
// from './scss/custom.scss'

// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// './scss/custom.scss' needs to come after 'bootstrap/dist/css/bootstrap.min.css'
// because of css imports also follow cascading pattern
import './scss/custom.scss';

const wrapper = document.getElementById('root');
wrapper ? ReactDOM.render(<App />, wrapper) : false;
