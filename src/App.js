import React, { Component } from 'react';
import logo from './logo.svg';
import './style.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ParentComponent />
      </div>
    );
  }
}

export default App;
