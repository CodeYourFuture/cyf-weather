import React, { Component } from 'react';

import './App.css';
import './grid.css';
import CurrentWeather from './Component/CurrentWeather';
import WeatherForecast from './Component/WeatherForecast';

class App extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      temp: undefined,
      temprature: undefined,
      humidity: undefined,
      pressure: undefined,

      error: undefined,
      codition: undefined
    };
  }
  searchForWeather = () => {
    var city = this.inputRef.current.value;
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=6d4716821c6a2523e4dc0477ce3028b4`
    )
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data) {
          this.setState({
            temperature: data.list[0].main.temp,
            humidity: data.list[0].main.humidity,
            pressure: data.list[0].main.pressure,
            condition: data.list[0].weather[0].description
          });
        }
      });
    console.log('i started to search for weather');
  };

  //  else (
  //   this.setState({
  //     error: "please check your spelling"
  //     )
  //   }
  // )

  render() {
    return (
      <div className="app">
        <div>
          <header className="app-header">
            <input
              placeholder="City"
              className="inputBar"
              ref={this.inputRef}
            />
            <button onClick={this.searchForWeather} className="btn">
              FIND WEATHER
            </button>
          </header>
        </div>{' '}
        <CurrentWeather
          temprature={this.state.temperature}
          humidity={this.state.humidity}
          presure={this.state.pressure}
          condition={this.state.codition}
        />
        <WeatherForecast
          temprature={this.state.temperature}
          humidity={this.state.humidity}
          presure={this.state.pressure}
          condition={this.state.codition}
        />
      </div>
    );
  }
}

export default App;
