import React, { Component } from "react";
import "./App.css";
import final from "./img/instructions/final-design.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <header className="app__header" />
        <label className="label"> insert your city here</label>
        <input type="text-box" name="City here" className="textbox" />
        <button type="button" className="weatherbutton">
          Find Weather!
        </button>
        <div>
          <img src={final} />
        </div>

        <main className="app__main" />
      </div>
    );
  }
}

export default App;
