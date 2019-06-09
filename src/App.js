import React, { Component } from "react";
import "./App.css";
import svg from "./src/img/weather-icons/clear.svg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <header className="app__header" />
        hello
        <img src={clear.svg} />
        <main className="app__main" />
      </div>
    );
  }
}

export default App;
