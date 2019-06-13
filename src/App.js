import React, { Component } from "react";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";
import clear from "./img/weather-icons/clear.svg";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import storm from "./img/weather-icons/storm.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import rain from "./img/weather-icons/rain.svg";
import snow from "./img/weather-icons/snow.svg";

import "./App.css";
import "./grid.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <header className="app__header">
          <section class="search">
            <form action="">
              <input
                class="text"
                placeholder="Type in a city name..."
                name="search"
              />
              <button class="btn">FIND WEATHER</button>
            </form>
          </section>
        </header>

        <main className="app__main">
          <img class="main-img" src={mostlycloudy} alt="mostly cloudy" />
          <h3 class="title">overcast clouds</h3>
          <section class="flex-container1">
            <h3 class="temp">
              <b>Temprature</b>&nbsp;&nbsp;&nbsp;10°to 11°C&nbsp;
            </h3>

            <h5 class="tempInfo">
              <br />
              <b>Humidity&nbsp; 78%</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <b>Pressure&nbsp; 100848</b>
            </h5>
          </section>
          <br />
          <br />
          <section class="flex-container">
            <div class="flex-box1">
              <p>03:00</p>
              <br />
              <img class="img-size" src={mostlycloudy} alt="mostly cloudy" />
              <br />
              <p>8°C</p>
            </div>
            <div class="flex-box2">
              <p>06:00</p>
              <br />
              <img class="img-size" src={mostlycloudy} alt="mostlyCloudy" />
              <br />
              <p>9°C</p>
            </div>
            <div class="flex-box3">
              <p>09:00</p>
              <br />
              <img class="img-size" src={clear} alt="Sunny" />
              <br />
              <p>14°C</p>
            </div>
            <div class="flex-box4">
              <p>12:00</p>
              <br />
              <img class="img-size" src={clear} alt="Sunny" />
              <br />
              <p>17°C</p>
            </div>
            <div class="flex-box5">
              <p>15:00</p>
              <br />
              <img class="img-size" src={clear} alt="Sunny" />
              <br />
              <p>18°C</p>
            </div>
            <div class="flex-box6">
              <p>18:00</p>
              <br />
              <img class="img-size" src={clear} alt="Sunny" />
              <br />
              <p>16°C</p>
            </div>
            <div class="flex-box7">
              <p>21:00</p>
              <br />
              <img class="img-size" src={mostlycloudy} alt="mostlycloudy" />
              <br />
              <p>13°C</p>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
