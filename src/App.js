import React, { Component } from 'react';

import './App.css';
import './grid.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <div className="app">
        <header className="app-header">
          <button className="btn">Find Weather</button>
        </header>
       
        <main className="app_main">
        </main>
      </div>
    );
  }
}

export default App;
