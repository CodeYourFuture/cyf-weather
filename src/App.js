import React, { Component } from "react";
import "./App.css";
import "./grid.css";
import clear from "./img/weather-icons/clear.svg";
import cloudy from "./img/weather-icons/cloudy.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import fog from "./img/weather-icons/fog.svg";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";
import rain from "./img/weather-icons/rain.svg";
import weather from "./data/weather.json";

const forecast8 = weather.list.slice(0, 7).map(function(item) {
  return {
    dt: new Date(item.dt * 1000),
    tempKF: item.main.temp_kf
  };
});

// create an object that contains things i need to access and access them via the properties eg: .

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <div className="container">
          <header className="app__header">
            <div className="searchbar">
              <input className="Search" />
              <button>FIND WEATHER</button>
            </div>
          </header>

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
              {forecast8.map(function(forecast) {
                return (
                  <div>
                    <div className="time">
                      {forecast.dt.getHours() + ":" + forecast.dt.getMinutes()}
                      netlify deploy --prod</div>
                    <img src={clear} />
                    <div className="degree">{forecast.temp_kf}</div>
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
