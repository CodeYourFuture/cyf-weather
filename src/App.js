import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <header className="app__header">
          <h1>London</h1>

          <p class="btn">FIND WEATHER</p>
        </header>

        <main className="app__main">
          <img
            src="https://i.colnect.net/b/1956/255/Winged-lion-in-gold.jpg"
            alt="Persian stamp"
          />
          <p>Temprature</p>
        </main>
      </div>
    );
  }
}

export default App;
