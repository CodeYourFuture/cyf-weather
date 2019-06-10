import React, { Component } from 'react';

import './App.css';
import './grid.css';
import Header from './Component/Header';
import MainPage from './Component/MainPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <Header />
        <MainPage />
      </div>
    );
  }
}

export default App;
