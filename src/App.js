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
      <div className="container">
        <header className="app__header">
          <div className="searchbar">
           <input className="Search"/>
           <button>Find Weather</button>
          </div>
        </header>

        <main className="app__main" >
          <div className="Todays weather">
            <div className ="current Weather">
            <h4 className="temp" >Temperature</h4>
            <div className="characteristics"> 
            <h6 className="humidity ">Humidity</h6>
            <h6 className="pressure">Pressure </h6>
            </div>
            </div>
          </div> 
        </main>

        <span className="upcoming">
         <ul>
           <li>
             <div className="time img temp">03:00</div>
           </li>
           <li>
             <div className="time img temp">06:00</div>
           </li>
           <li>
             <div className="time img temp">09:00</div>
           </li>
           <li>
             <div className="time img temp">12:00</div>
           </li>
           <li>
             <div className="time img temp">15:00</div>
           </li>
           <li>
             <div className="time img temp">18:00</div>
           </li>
           <li>
             <div className="time img temp">21:00</div>
           </li>
         </ul>
        </span>
    </div>
    </div>
    );
  }
}

export default App;
