import React, { Component } from "react";
import "./App.css";
import cloudy from "./img/weather-icons/cloudy.svg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <header className="app__header" />
        <div className="flex-container">
          <form onSubmit>
            <input
              type="text"
              name="city"
              placeholder="City..."
              background-color="red"
            />

            <button className="weatherbutton">Find Weather!</button>
          </form>
        </div>

        <div />

        <main />
        <div className="App-main ">
          <img src={cloudy} className="App-clear" align="bottom" />
        </div>
      </div>
    );
  }
}

export default App;
