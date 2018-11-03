import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Comp1.js'
import './components/Comp2.js'
import './components/Comp3.js'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Comp1 />
        <Comp2 />
        <Comp3 />
      </div>
    );
  }
}

export default App;
