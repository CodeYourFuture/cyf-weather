import React, { Component } from "react";
import "./App.css";
import "./grid.css";
import Search from "./Components/Search";
import CurrentWeather from "./Components/CurrentWeather";
import Upcoming from "./Components/Upcoming";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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

{
  /* // <div className="time">9:00</div> */
}
