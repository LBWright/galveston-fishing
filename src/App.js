import React, { Component } from 'react';
import WeatherList from './components/WeatherList'

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Galveston County Fishing</h1>
        <h2>Get ready to fish your socks off</h2>
        <WeatherList />
      </div>
    );
  }
}

export default App;
