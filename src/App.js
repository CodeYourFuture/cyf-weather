import React, { Component } from "react";
import "./App.css";
import clear from "./img/weather-icons/clear.svg";
import cloudy from "./img/weather-icons/cloudy.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import fog from "./img/weather-icons/fog.svg";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";
import rain from "./img/weather-icons/rain.svg";

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
              <button>Find Weather</button>
            </div>
          </header>

          <main className="app__main">
            <div className="Todays weather">
              <div className="current Weather">
                <img className="currentoverview" src={partlycloudy} />
                <div className="overview">overcast clouds </div>
                <h4 className="current temp">Temperature 10 to 11c</h4>
                <div className="characteristics">
                  <h6 className="humidity "> <b>Humidity </b>78%</h6>
                  <h6 className="pressure"><strong>Pressure</strong> 1008.48></h6>
                </div>
              </div>
            </div>

            <div className="upcoming">
              <div>
                <div className="time">3:00 </div>
                <img src={clear} />
                <div className="degree">9c</div>
              </div>

              <div>
                <div className="time">06:00</div>
                <img src={cloudy} />
                <div className="degree">9c</div>
              </div>

              <div>
                <div className="time">09:00</div>
                <img src={drizzle} />
                <div className="degree">9c</div>
              </div>

              <div>
                <div className="time">12:00</div>
                <img src={fog} />
                <div className="degree">9c</div>
              </div>

              <div>
                <div className="time">15:00</div>
                <img src={mostlycloudy} />
                <div className="degree">9c</div>
              </div>

              <div>
                <div className="time">18:00</div>
                <img src={partlycloudy} />
                <div className="degree">9c</div>
              </div>

              <div>
                <div className="time">21:00</div>
                <img src={rain} />
                <div className="degree">9c</div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
