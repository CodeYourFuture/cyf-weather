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
        <header className="app__header" />
        <h2>Say Hello To Todays Weather Mohbeen </h2>
        <main className="app__main" />
      </div>
    );
  }
}

export default App;
