import React, { Component } from "react";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import "../App.css";
class CurrentWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props.icons(this.props.weatherNow.weather[0].id));
    return (
      <main className="currentWeather">
        <img
          class="main-img"
          src={this.props.icons(this.props.weatherNow.weather[0].id)}
          alt="mostly cloudy"
        />
        <h3 class="title">overcast clouds</h3>
        <section class="flex-container1">
          <p class="temp">
            <b>Temprature</b>&nbsp;&nbsp;&nbsp;{this.props.weatherNow.main.temp}
            &nbsp;
          </p>

          <p class="tempInfo">
            <br />
            <b>Humidity</b>&nbsp;{this.props.weatherNow.main.humidity + "%"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <b>Pressure</b>&nbsp;{this.props.weatherNow.main.pressure}
          </p>
        </section>
      </main>
    );
  }
}

export default CurrentWeather;
