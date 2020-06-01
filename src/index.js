import ReactDOM from 'react-dom';

import Form from './components/form.component.jsx';

const wrapper = document.getElementById('container');
wrapper ? ReactDOM.render(<Form />, wrapper) : false;
