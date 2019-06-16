import React, { Component } from "react";
import "./App.css";
import "./grid.css";
import clear from "./img/weather-icons/clear.svg";
import cloudy from "./img/weather-icons/cloudy.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import storm from "./img/weather-icons/storm.svg";
import snow from "./img/weather-icons/snow.svg";
import fog from "./img/weather-icons/fog.svg";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";
import rain from "./img/weather-icons/rain.svg";
import weather from "./data/weather.json";
import Search from "./Components/Search";
// import CurrentWeather from "./CurrentWeather";
// import Upcoming from "./Upcoming";

import moment from "moment";

const forecast8 = weather.list.map(function(item) {
  return {
    dt: moment(item.dt * 1000),
    id: item.weather[0].id,
    temp: Math.floor(item.main.temp) + "°C"
  };
});

// create an object that contains things i need to access and access them via the properties eg: .

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getWeatherIcon(weatherId) {
    console.log(weatherId);
    if (weatherId < 300) {
      //TODO: this is not complete - it ALWAYS returns the same thing!
      return storm;
    } else if (weatherId < 499) {
      return drizzle;
    } else if (weatherId < 599) {
      return rain;
    } else if (weatherId < 699) {
      return snow;
    } else if (weatherId < 799) {
      return fog;
    } else if (weatherId == 800) {
      return clear;
    } else if (weatherId == 801) {
      return partlycloudy;
    } else if (weatherId > 801 && weatherId < 805) {
      return mostlycloudy;
    }
  }

  render() {
    
    return (
      <div className="app">
        <div className="container">
          <Search />

          <main className="app__main">
            <div className="Todaysweather">
              <div className="currentWeather">
                <img className="currentoverview" src={partlycloudy} />
                <div className="overview">overcast clouds</div>
                <div className="temperature">
                  <span className="data-heading"> Temperature</span> 10 to 11c
                </div>
                <div className="characteristics">
                  <div>
                    <span className="data-heading"> Humidity</span> 78%
                  </div>
                  <div>
                    <span className="data-heading">Pressure</span> 1008.48
                  </div>
                </div>
              </div>
            </div>

            <div className="upcoming">
              {forecast8.map(forecast => {
                console.log(forecast);
                let iconsource = this.getWeatherIcon(forecast.id);
                console.log(iconsource);
                return (
                  <div>
                    <div className="time">{forecast.dt.format("hh:mm")}</div>
                    <img src={iconsource} />
                    <div className="degree">{forecast.temp}</div>
                  </div>
                );
              })}
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;

{
  /* // <div className="time">9:00</div> */
}
