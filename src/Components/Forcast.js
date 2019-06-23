import React, { Component } from "react";
//import React,
import storm from "../img/weather-icons/storm.svg";
import drizzle from "../img/weather-icons/drizzle.svg";
import rain from "../img/weather-icons/rain.svg";
import snow from "../img/weather-icons/snow.svg";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";
import clear from "../img/weather-icons/clear.svg";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import "../App.css";
class Forcast extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <main className="Forcast">
        <br />
        <br />
        <section class="flex-container">
          {this.props.list.map(weatherObj => {
            return (
              <div class="flex-box1">
                <p class="Time">{weatherObj.dt_txt.split(" ")[1]}</p>
                <br />
                <img
                  src={this.props.icons(weatherObj.weather[0].id)}
                  class="img-size"
                />
                <br />
                <p class="temprature">{weatherObj.main.temp + "°C"}</p>
              </div>
            );
          })}
        </section>
      </main>
    );
  }
}

export default Forcast;
