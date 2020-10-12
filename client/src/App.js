import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SeatPicker from './components/SeatPicker';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SeatPicker />
      </div>
    );
  }
}

export default App;
