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
          <div class="flex-box1">
            <p class="Time">{this.props.time}</p>
            <br />
            <img class="img-size" src={this.props.imgSrc} />

            <br />
            <p class="temprature">{this.props.temprature}</p>
          </div>
          <div class="flex-box1">
            <p>06:00</p>
            <br />
            <img class="img-size" src={mostlycloudy} alt="mostlyCloudy" />
            <br />
            <p>9°C</p>
          </div>
          <div class="flex-box1">
            <p>09:00</p>
            <br />
            <img class="img-size" src={clear} alt="Sunny" />
            <br />
            <p>14°C</p>
          </div>
          <div class="flex-box1">
            <p>12:00</p>
            <br />
            <img class="img-size" src={clear} alt="Sunny" />
            <br />
            <p>17°C</p>
          </div>
          <div class="flex-box1">
            <p>15:00</p>
            <br />
            <img class="img-size" src={clear} alt="Sunny" />
            <br />
            <p>18°C</p>
          </div>
          <div class="flex-box1">
            <p>18:00</p>
            <br />
            <img class="img-size" src={clear} alt="Sunny" />
            <br />
            <p>16°C</p>
          </div>
          <div class="flex-box1">
            <p>21:00</p>
            <br />
            <img class="img-size" src={mostlycloudy} alt="mostlycloudy" />
            <br />
            <p>13°C</p>
          </div>
        </section>
      </main>
    );
  }
}

export default Forcast;
