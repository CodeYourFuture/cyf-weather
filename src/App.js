import React, { Component } from "react";
import storm from "./img/weather-icons/storm.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import rain from "./img/weather-icons/rain.svg";
import snow from "./img/weather-icons/snow.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";
import clear from "./img/weather-icons/clear.svg";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import Forcast from "./Components/Forcast";
import SearchBar from "./Components/SearchBar";
import CurrentWeather from "./Components/CurrentWeather";
//import FakeWeather from "./data/FakeWeather.json";
import FakeWeatherData from "./Components/FakeWeatherData";
import "./App.css";
import "./grid.css";
// import SearchBar from "./Components/SearchBar";
// import CurrentWeather from "./Components/CurrentWeather";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section>
        <SearchBar buttonTitle="searchCity" />
        <CurrentWeather />
        <FakeWeatherData />

        <Forcast time="3:00" imgSrc={mostlycloudy} temprature="8°C" />
      </section>
    );
  }
}

export default App;
