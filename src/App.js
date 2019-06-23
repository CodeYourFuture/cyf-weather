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
      temperature: undefined,
      humidity: undefined,
      pressure: undefined,
      codition: undefined,
      error: undefined
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
            allData: data,
            temperature: data.list[0].main.temp,
            humidity: data.list[0].main.humidity,
            pressure: data.list[0].main.pressure,
            condition: data.list[0].weather[0].description
          });
        } else {
          this.setState({
            error: 'please check your spelling'
          });
        }
      });
  };

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
        </div>
        <CurrentWeather
          temperature={this.state.temperature}
          humidity={this.state.humidity}
          pressure={this.state.pressure}
          condition={this.state.condition}
        />
        <WeatherForecast data={this.state.allData} />
      </div>
    );
  }
}
export default App;
