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
        <input className="inputBar"/>
        
          <button className="btn">FIND WEATHER</button>
        </header>
       
        <main className="app_main">
          <div className="main_pic"><img src="https://i.postimg.cc/2yF8LD0n/cloud-sun-copy-copy.png" className="main_pic_icon" /></div>
          <div className="overcast">Overcast Cloud</div>
          <div className="temp">Temprature 10°C to 11°C</div>
          <div>
            <div>Humidity  78%</div>
            <div>Pressure 1008.48</div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
