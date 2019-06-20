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
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=${API_KEY}`
    );

    const response = await api_call.json();
    console.log(response);

    if (response.list) {
      this.setState({
        temperature: response.list[0].main.temp,
        humidity: response.list[0].main.humidity,
        pressure: response.list[0].main.pressure,
        icon: response.list[0].weather[0].icon,
        time: response.list[1].dt_txt.slice(10, -3),
        temp: response.list[1].main.temp,
        icn: response.list[1].weather[0].icon,
        time1: response.list[2].dt_txt.slice(10, -3),
        temp1: response.list[2].main.temp,
        icn1: response.list[2].weather[0].icon,
        time2: response.list[3].dt_txt.slice(10, -3),
        temp2: response.list[3].main.temp,
        icn2: response.list[3].weather[0].icon,
        time3: response.list[4].dt_txt.slice(10, -3),
        temp3: response.list[4].main.temp,
        icn3: response.list[4].weather[0].icon,
        time4: response.list[5].dt_txt.slice(10, -3),
        temp4: response.list[5].main.temp,
        icn4: response.list[5].weather[0].icon,
        time5: response.list[6].dt_txt.slice(10, -3),
        temp5: response.list[6].main.temp,
        icn5: response.list[6].weather[0].icon,
        time6: response.list[7].dt_txt.slice(10, -3),
        temp6: response.list[7].main.temp,
        icn6: response.list[7].weather[0].icon,
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
            time1={this.state.time1}
            icn1={this.state.icn1}
            temp1={this.state.temp1}
            time2={this.state.time2}
            icn2={this.state.icn2}
            temp2={this.state.temp2}
            time3={this.state.time3}
            icn3={this.state.icn3}
            temp3={this.state.temp3}
            time4={this.state.time4}
            icn4={this.state.icn4}
            temp4={this.state.temp4}
            time5={this.state.time5}
            icn5={this.state.icn5}
            temp5={this.state.temp5}
            time6={this.state.time6}
            icn6={this.state.icn6}
            temp6={this.state.temp6}
            time7={this.state.time7}
            icn7={this.state.icn7}
            temp7={this.state.temp7}
          />
        </div>
      </div>
    );
  }
}

export default App;
