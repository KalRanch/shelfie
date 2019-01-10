import React, { Component } from 'react';
import './App.css';
import Dashboard from './Component/Dashboard/Dashboard.js'
import Form from './Component/Form/Form.js'
import Header from './Component/Header/Header.js'


class App extends Component {
  render() {
    return (
      <div>
      <Dashboard />
      <Header />
      <Form />
      </div>
    );
  }
}

export default App;
