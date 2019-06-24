import React from "react";
import clear from "../img/weather-icons/clear.svg";

import drizzle from "../img/weather-icons/drizzle.svg";
import fog from "../img/weather-icons/fog.svg";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";
import rain from "../img/weather-icons/rain.svg";
import snow from "../img/weather-icons/snow.svg";
import storm from "../img/weather-icons/storm.svg";

class Weather extends React.Component {
  findIcon = () => {};

  render() {
    let weatherIcon;
    const id = this.props.currentData.weather[0].id;
    if (id < 300) {
      weatherIcon = storm;
    } else if (id > 300 && id <= 499) {
      weatherIcon = drizzle;
    } else if (id >= 500 && id <= 599) {
      weatherIcon = rain;
    } else if (id >= 600 && id <= 699) {
      weatherIcon = snow;
    } else if (id >= 700 && id <= 799) {
      weatherIcon = fog;
    } else if (id === 800) {
      weatherIcon = clear;
    } else if (id === 801) {
      weatherIcon = partlycloudy;
    } else if (id >= 802 && id <= 805) {
      weatherIcon = mostlycloudy;
    }
    console.log(this.props.currentData);
    return (
      <div className="current-info">
        <div className="current-icon">
          {this.props.currentData.icon}
          <img src={weatherIcon} alt="icons" />
        </div>

        <div className="current-description">
          <p>{this.props.currentData.weather[0].description}</p>
        </div>

        <div className="current-temp">
          <p>
            tempreture:{this.props.currentData.main.temp}
            <span>&#8451;</span>
          </p>
        </div>

        <div className="current-sub">
          <p>humididty:{this.props.currentData.main.humidity}</p>
          <p>pressure:{this.props.currentData.main.pressure}</p>
        </div>
      </div>
    );
  }
}

export default Weather;
