import React from "react";
import Weather from "./components/Weather";
import Form from "./components/Form";
import "./App.css";
import clear from "./img/weather-icons/clear.svg";
import Forecast from "./components/Forecast";

const Api_Key = "8d2de98e089f1c28e1a22fc19a24ef04";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    humidity: undefined,
    pressure: undefined,
    error: undefined
  };

  // i use getWeather is a method to make the api call
  getWeather = async e => {
    const city = e.target.elements.city.value;
    e.preventDefault();
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric
&appid=${Api_Key}`
    );
    const response = await api_call.json();
    console.log(response);
    if (city) {
      this.setState({
        temperature: response.main.temp,
        city: response.name,

        humidity: response.main.humidity,
        pressure: response.main.pressure,
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
            <Form loadWeather={this.getWeather} />
          </div>
          <div className="weather-icons">
            <img src={clear} height="200" width="200" alt="clear" />
            <figcaption className="fig-caption" font-size="30px">
              overcast clear
            </figcaption>
          </div>

          <div className="weather-container">
            <Weather
              temperature={this.state.temperature}
              city={this.state.city}
              humidity={this.state.humidity}
              pressure={this.state.pressure}
              error={this.state.error}
            />
          </div>
        </div>
        <Forecast />
      </div>
    );
  }
}
export default App;
