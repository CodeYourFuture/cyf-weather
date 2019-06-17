import React, { Component } from "react";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import "../App.css";
class CurrentWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <main className="currentWeather">
        <img class="main-img" src={mostlycloudy} alt="mostly cloudy" />
        <h3 class="title">overcast clouds</h3>
        <section class="flex-container1">
          <p class="temp">
            <b>Temprature</b>&nbsp;&nbsp;&nbsp;10°to 11°C&nbsp;
          </p>

          <p class="tempInfo">
            <br />
            <b>Humidity</b>&nbsp; 78%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <b>Pressure</b>&nbsp;100848
          </p>
        </section>
      </main>
    );
  }
}

export default CurrentWeather;
