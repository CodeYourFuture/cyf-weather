import React from "react";

import Weather from "./components/Weather";
import Form from "./components/Form";
import "./App.css";

import ForeCast from "./components/ForeCast";

const API_KEY = "75d8aff5474fea6a3b1c8921b0f1d35d";

class App extends React.Component {
  state = {
    temp: undefined,
    temperature: undefined,

    humidity: undefined,
    pressure: undefined,

    error: undefined,
    condition: undefined
  };

  // i use getWeather is a method to make the api call
  getWeather = async e => {
    const city = e.target.elements.city.value;
    console.log(city);
    e.preventDefault();
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=${API_KEY}`
    );

    const response = await api_call.json();
    console.log(response);

    if (response.list) {
      this.setState({
        weatherData: response
      });
    } else {
      this.setState({
        error: "no response found, check your spelling please!!"
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

          <div class-name="forecast-container">
            {this.state.weatherData && (
              <Weather currentData={this.state.weatherData.list[0]} />
            )}
          </div>
        </div>
        <div class-name="forecast-container">
          {this.state.weatherData && <ForeCast data={this.state.weatherData} />}
        </div>
      </div>
    );
  }
}

export default App;
