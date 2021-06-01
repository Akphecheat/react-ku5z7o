import React, { Component } from 'react';
import logo from './logo.svg';
import './style.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* functional componnent */}
        <Greet name="Bona" job="Banker" />
        <Greet name="Kosal" job="IT" />
        <Greet name="Vannak" job="Designer" />
        {/* <Welcome /> */}

        {/* class component */}
        <Welcome name="Bona" job="Banker" />
        <Welcome name="Kosal" job="IT" />
        <Welcome name="Vannak" Job="Designer" />
      </div>
    );
  }
}

export default App;
