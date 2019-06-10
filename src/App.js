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

        <input placeholder="City" className="inputBar" />
        
          <button className="btn">FIND WEATHER</button>
        </header>
       
        <main className="app_main">
          <div className="main_pic"><img src="https://i.postimg.cc/2yF8LD0n/cloud-sun-copy-copy.png" className="main_pic_icon" /></div>
          <div className="overcast">Overcast Cloud</div>
          <div className="temp">Temprature 10°C to 11°C</div>
          <div className="humidity_pressure">
            <div>Humidity   <span className="digit">78%</span></div>
            <div>Pressure   <span className="digit">1008.48</span></div>
          </div>
          <div className="twentyfour_hours">
            <div>
              <div className="time">03:00</div>
              <div><img src="https://i.postimg.cc/2yF8LD0n/cloud-sun-copy-copy.png" className="icon" /></div>
              <div className="degree">8°C</div>
            </div>


            <div>
              <div className="time">06:00</div>
              <div><img src="https://i.postimg.cc/2yF8LD0n/cloud-sun-copy-copy.png" className="icon" /></div>
              <div className="degree">9°C</div>
            </div>


            <div>
              <div className="time">09:00</div>
              <div><img src="https://i.postimg.cc/28j0xkFZ/sun.png" className="icon" /></div>
              <div className="degree">14°C</div>
            </div>

            <div>
              <div className="time">12:00</div>
              <div><img src="https://i.postimg.cc/28j0xkFZ/sun.png" className="icon" /></div>
              <div className="degree">17°C</div>
            </div>

            <div>
              <div className="time">15:00</div>
              <div><img src="https://i.postimg.cc/28j0xkFZ/sun.png" className="icon" /></div>
              <div className="degree">18°C</div>
            </div>

            <div>
              <div className="time">18:00</div>
              <div><img src="https://i.postimg.cc/28j0xkFZ/sun.png" className="icon" /></div>
              <div className="degree">16°C</div>
            </div>

            <div>
              <div className="time">21:00</div>
              <div><img src="https://i.postimg.cc/2yF8LD0n/cloud-sun-copy-copy.png" className="icon" /></div>
              <div className="degree">13°C</div>
            </div>

          </div>
        </main>
      </div>
    );
  }
}

export default App;
