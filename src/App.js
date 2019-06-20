import React, { Component } from "react";
import "./App.css";
import "./grid.css";
//import weather from "../data/weather.json";
import Search from "./Components/Search";
import CurrentWeather from "./Components/CurrentWeather";
import Upcoming from "./Components/Upcoming";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // weather: weather
    };
  }

  render() {
    return (
      <div className="app">
        <div className="container">
          <Search />
          <main className="app__main">
            <CurrentWeather />
            <Upcoming />
          </main>
        </div>
      </div>
    );
  }
}

export default App;
