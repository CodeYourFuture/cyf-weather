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
        </header>

        <main className="app__main">
          <p>Temprature</p>
        </main>
      </div>
    );
  }
}

export default App;
