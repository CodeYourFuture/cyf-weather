import React from "react";

import Weather from "./components/Weather";
import Form from "./components/Form";
import "./App.css";

import ForeCast from "./components/foreCast.js";

const API_KEY = "75d8aff5474fea6a3b1c8921b0f1d35d";

class App extends React.Component {
  state = {
    temp: undefined,
    temperature: undefined,
    city: undefined,
    humidity: undefined,
    pressure: undefined,
    hour: undefined,
    icon: undefined,

    error: undefined,
    condition: undefined
  };

  // i use getWeather is a method to make the api call
  getWeather = async e => {
    const city = e.target.elements.city.value;
    e.preventDefault();
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=${API_KEY}`
    );

    const response = await api_call.json();
    console.log(response);

    if (response.list) {
      this.setState({
        temperature: response.list[0].main.temp,
        humidity: response.list[0].main.humidity,
        pressure: response.list[0].main.pressure,
        icon: response.list[0].weather[0].icon,
        time: response.list[1].dt_txt,
        temp: response.list[1].main.temp,
        icn: response.list[1].weather[0].icon,
        time: response.list[2].dt_txt,
        temp: response.list[2].main.temp,
        icn: response.list[2].weather[0].icon,
        time: response.list[3].dt_txt,
        temp: response.list[3].main.temp,
        icn: response.list[3].weather[0].icon,
        time: response.list[4].dt_txt,
        temp: response.list[4].main.temp,
        icn: response.list[4].weather[0].icon,
        time: response.list[5].dt_txt,
        temp: response.list[5].main.temp,
        icn: response.list[5].weather[0].icon,
        time: response.list[6].dt_txt,
        temp: response.list[6].main.temp,
        icn: response.list[6].weather[0].icon,
        time: response.list[7].dt_txt,
        temp: response.list[7].main.temp,
        icn: response.list[7].weather[0].icon,
        error: ""
      });
    } else {
      this.setState({
        error: "no data found, check your spelling please!!"
      });
    }
  };

  render() {
    return (
      <div className="flex-container">
        <div className="main-App">
          <div className="form-container">
            <Form getWeather={this.getWeather} />
          </div>

          <div className="weather-container">
            <Weather
              temperature={this.state.temperature}
              humidity={this.state.humidity}
              pressure={this.state.pressure}
              icon={this.state.icon}
              error={this.state.error}
              condition={this.state.condition}
            />
          </div>
        </div>
        <div class-name="forecast-container">
          <ForeCast
            time={this.state.time}
            icn={this.state.icn}
            temp={this.state.temp}
          />
        </div>
      </div>
    );
  }
}

export default App;
