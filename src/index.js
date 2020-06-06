import React from 'react';
import ReactDOM from 'react-dom';

import App from './react/App.js';

// ? import './index.css';
// * we don't need to import ./index.css into index.js, because we already imported
// * the css file into index.html via:
// * <link rel="stylesheet" type="text/css" href="/src/index.css" />
// ! actually we do need to import './index.css' at the very end to leverage our
// ! custom css over default bootstrap styles, as defined in
// ! 'bootstrap/dist/css/bootstrap.min.css' and './bootstrap-styles/custom.scss'

// import 'bootstrap';
// I'm not importing the entire bootstrap, because I'm already getting the styles
// from './scss/custom.scss'

// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// './scss/custom.scss' needs to come after 'bootstrap/dist/css/bootstrap.min.css'
// because of css imports also follow cascading pattern
import './bootstrap-styles/custom.scss';
// import your own style-sheet as './index.css' or './index.scss'
import './index.scss';

const wrapper = document.getElementById('root');
wrapper ? ReactDOM.render(<App />, wrapper) : false;
