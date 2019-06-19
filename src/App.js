import React from "react";
import Weather from "./components/Weather";
import Form from "./components/Form";
import "./App.css";

import Forecast from "./components/Forecast";

const API_KEY = "014c730fd22445199fd213403191806";

class App extends React.Component {
  state = {
    temp_c: undefined,
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
      `http://api.apixu.com/v1/current.json?key=${API_KEY}&q=${city}` &&
        `http://api.apixu.com/v1/forecast.json?key=${API_KEY}&q=${city}`
    );
    const response = await api_call.json();
    console.log(response);
    if (city) {
      this.setState({
        temperature: response.current.temp_c,
        hour: response.forecast.forecastday[0].astro,
        humidity: response.current.humidity,
        pressure: response.current.pressure_mb,

        icon: response.current.condition.icon,
        condition: response.current.condition.text,
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
              humidity={this.state.humidity}
              pressure={this.state.pressure}
              icon={this.state.icon}
              error={this.state.error}
              condition={this.state.condition}
            />
          </div>
        </div>
        <Forecast
          temperature={this.state.temperature}
          hour={this.state.hour}
          city={this.state.city}
          icon={this.state.icon}
        />
      </div>
    );
  }
}
export default App;
