import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
      <UserInput/>

      </div>
    );
  }
}

export default App;
