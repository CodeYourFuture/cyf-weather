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
        <main className="app__main">"Najla Soltana"</main>
      </div>
    );
  }
}

export default App;
