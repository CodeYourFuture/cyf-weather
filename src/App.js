import React, { Component } from 'react';

import './App.css';
import './grid.css';
import Header from './Component/Header';
import CurrentWeather from './Component/CurrentWeather';
import WeatherForecast from './Component/WeatherForecast';



import fakeWeatherData from './weatherData.json';



class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=london&cnt=8&units=metric&appid=6d4716821c6a2523e4dc0477ce3028b4`
    )
      .then(response => response.json())
      .then(data => {
        this.setState({ data });
      });
  }

  render() {
    return (
      <div className="app">
        <Header />
        <CurrentWeather data={this.state.data} />
        <WeatherForecast data={this.state.data} />
      </div>
    );
  }
}

export default App;
