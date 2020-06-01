import React from 'react';

import Form from './components/form.component.jsx';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <hr />
        <p>This is part of ReactDOM:</p>
        <Form />
      </div>
    );
  }
}

export default App;
