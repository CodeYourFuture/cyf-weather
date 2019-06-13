import React from "react";
import Weather from "./components/Weather";
import Form from "./components/Form";
import "./App.css";
import clear from "./img/weather-icons/clear.svg";
import cloudy from "./img/weather-icons/cloudy.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import fog from "./img/weather-icons/fog.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";
import rain from "./img/weather-icons/rain.svg";
import storm from "./img/weather-icons/storm.svg";

const Api_Key = "8d2de98e089f1c28e1a22fc19a24ef04";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };

  // i use getWeather is a method to make the api call
  getWeather = async e => {
    const city = e.target.elements.city.value;
    e.preventDefault();
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_Key}`
    );
    const response = await api_call.json();
    console.log(response);
    if (city) {
      this.setState({
        temperature: response.main.temp,
        city: response.name,

        humidity: response.main.humidity,
        description: response.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        error: "Please input search values..."
      });
    }
  };

  render() {
    return (
      <div className="main-App">
        <div className="form-container">
          <Form loadWeather={this.getWeather} />
        </div>
        <div className="weather-container">
          <Weather
            temperature={this.state.temperature}
            city={this.state.city}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
          />
          <div className="weather-icons">
            <img src={clear} height="300" width="300" alt="clear" />
            <figcaption className="fig-caption" font-size="50px">
              overcast clear
            </figcaption>
          </div>
          <div className="weather-cast">
            <ul>
              <li>Tempreature:</li>
              <li>Humidity:</li>
              <li>Pressure:</li>
            </ul>
          </div>
          <div className="weather-forcast">
            <p>
              03:00
              <br />
              <img src={cloudy} alt="cloudy" height="42" width="42" />
              <br />
              13&deg;C
            </p>
            <p>
              06:00 <br />
              <img src={drizzle} alt="drizzle" height="42" width="42" />
              <br />
              13&deg;C
            </p>
            <p>
              09:00 <br />
              <img src={fog} alt="fog" height="42" width="42" />
              <br />
              13&deg;C
            </p>
            <p>
              12:00 <br />
              <img
                src={partlycloudy}
                alt="partlycloudy"
                height="42"
                width="42"
              />
              <br />
              13&deg;C
            </p>
            <p>
              15:00 <br />
              <img src={rain} alt="rain" height="42" width="42" />
              <br />
              13&deg;C
            </p>
            <p>
              18:00 <br />
              <img src={storm} alt="storm" height="42" width="42" />
              <br />
              13&deg;C
            </p>
            <p>
              21:00 <br />
              <img src={storm} alt="storm" height="42" width="42" />
              <br />
              13&deg;C
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
