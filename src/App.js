import React from "react";
import Weather from "./components/Weather";
import Form from "./components/Form";
import "./App.css";

import Forecast from "./components/Forecast";

const API_KEY = "8d2de98e089f1c28e1a22fc19a24ef04";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    humidity: undefined,
    pressure: undefined,
    hour: undefined,
    icon: undefined,
    error: undefined,
    description: undefined
  };

  // i use getWeather is a method to make the api call
  getWeather = async e => {
    const city = e.target.elements.city.value;
    e.preventDefault();
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const response = await api_call.json();
    console.log(response);
    if (city) {
      this.setState({
        temperature: response.main.temp,
        city: response.name,

        humidity: response.main.humidity,
        pressure: response.main.pressure,
        hour: response.dt_txt,
        icon: response.weather[0].icon,
        description: response.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        error: "Dummy! write city name first"
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
              city={this.state.city}
              humidity={this.state.humidity}
              pressure={this.state.pressure}
              hour={this.state.hour}
              icon={this.state.icon}
              error={this.state.error}
              description={this.state.description}
            />
          </div>
        </div>
        <Forecast />
      </div>
    );
  }
}
export default App;
