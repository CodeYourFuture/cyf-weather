import React, { Component } from "react";
import storm from "./img/weather-icons/storm.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import rain from "./img/weather-icons/rain.svg";
import fog from "./img/weather-icons/fog.svg";
import snow from "./img/weather-icons/snow.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";
import clear from "./img/weather-icons/clear.svg";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import Forcast from "./Components/Forcast";
import SearchBar from "./Components/SearchBar";
import CurrentWeather from "./Components/CurrentWeather";
import fakeWeather from "./data/fakeWeather.json";
//import FakeWeatherData from "./Components/FakeWeatherData";
import "./App.css";
import "./grid.css";
// import SearchBar from "./Components/SearchBar";
// import CurrentWeather from "./Components/CurrentWeather";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoading: false
    };
  }

  componentDidMount() {
    var Default = "94bd2232bd51095641bf45f4639f13b5";
    var CITY_NAME = "London";
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${CITY_NAME}&cnt=8&units=metric&appid=${Default}`
    )
      .then(res => res.json())
      .then(json => {
        console.log(json);
        this.setState({
          isLoading: true,
          items: json
        });
      });
  }
  getIcons(weatherId) {
    if (weatherId < 300) {
      return storm;
    } else if (weatherId >= 300 && weatherId < 500) {
      return drizzle;
    } else if (weatherId >= 500 && weatherId < 600) {
      return rain;
    } else if (weatherId >= 600 && weatherId < 700) {
      return snow;
    } else if (weatherId >= 700 && weatherId < 800) {
      return fog;
    } else if (weatherId == 800) {
      return clear;
    } else if (weatherId == 801) {
      return partlycloudy;
    } else if (weatherId > 801 && weatherId <= 805) {
      return mostlycloudy;
    }
  }
  render() {
    var { isLoading, items } = this.state;
    if (!isLoading) {
      return <span>Loading... 👽</span>;
    } else {
      return (
        <section>
          <SearchBar buttonTitle="searchCity" />
          <CurrentWeather
            weatherNow={items.list[0]}
            icons={id => {
              return this.getIcons(id);
            }}
          />

          <Forcast
            list={items.list}
            imgSrc={mostlycloudy}
            temprature="8°C"
            icons={id => {
              return this.getIcons(id);
            }}
          />
        </section>
      );
    }
  }
}
export default App;
