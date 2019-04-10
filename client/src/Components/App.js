import React, { Component } from 'react';
import ForecastList from './ForecastList/ForecastList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="weather-app">
        <ForecastList days={7} />
      </div>
    );
  }
}

export default App;
