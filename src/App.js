import React, { Component } from 'react';
import logo from './logo.svg';
import './style.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import EventBind from './components/EventBind';

class App extends Component {
  render() {
    return (
      <div className="App">
        <EventBind />
      </div>
    );
  }
}

export default App;
