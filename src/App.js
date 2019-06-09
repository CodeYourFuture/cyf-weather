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
        <div>
          <ul>
            <li>03:00</li>
            <li>06:00</li>
            <li>09:00</li>
            <li>12:00</li>
            <li>15:00</li>
            <li>18:00</li>
            <li>21:00</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
