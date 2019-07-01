import React, { Component } from "react";

import clear from "../img/weather-icons/clear.svg";
import drizzle from "../img/weather-icons/drizzle.svg";
import fog from "../img/weather-icons/fog.svg";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";
import rain from "../img/weather-icons/rain.svg";
import snow from "../img/weather-icons/snow.svg";
import storm from "../img/weather-icons/storm.svg";

class ForecastIcon extends Component {
  findIcon = () => {};

  render() {
    let weatherIcon;
    const id = this.props.data.weather[0].icon;
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
    console.log(this.props.data);

    return <div>{weatherIcon}</div>;
  }
}

export default ForecastIcon;
