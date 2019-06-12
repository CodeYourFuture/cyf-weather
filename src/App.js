import React, { Component } from "react";
import "./App.css";
import "./grid.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <header className="app__header">
          <section class="search">
            <form action="">
              <input class="text" placeholder="Search.." name="search" />
              <button class="btn">FIND WEATHER</button>
            </form>
          </section>
        </header>

        <main className="app__main">
          <img
            src="https://cdn4.iconfinder.com/data/icons/iconsland-weather/PNG/256x256/Sunny.png"
            alt="Sunny"
          />
          <section class="flex-container1">
            <h3 class="temp">
              <b>Temprature</b>&nbsp;&nbsp;&nbsp;10 to 11 C&nbsp;
            </h3>

            <h5 class="tempInfo">
              <br />
              <b>Humidity&nbsp; 78%</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <b>Pressure&nbsp; 100848</b>
            </h5>
          </section>
          <br />
          <br />
          <section class="flex-container">
            <div class="flex-box1">
              <p>03:00</p>
              <br />
              <img
                class="img-size"
                src="https://cdn4.iconfinder.com/data/icons/iconsland-weather/PNG/256x256/Snow_Occasional.png"
                alt="SnowOcassional"
              />
              <br />
              <p>8C</p>
            </div>
            <div class="flex-box2">
              <p>06:00</p>
              <br />
              <img
                class="img-size"
                src="https://cdn4.iconfinder.com/data/icons/iconsland-weather/PNG/256x256/Snow_Occasional.png"
                alt="SnowOcassional"
              />
              <br />
              <p>9C</p>
            </div>
            <div class="flex-box3">
              <p>09:00</p>
              <br />
              <img
                class="img-size"
                src="https://cdn4.iconfinder.com/data/icons/iconsland-weather/PNG/256x256/Sunny.png"
                alt="Sunny"
              />
              <br />
              <p>14C</p>
            </div>
            <div class="flex-box4">
              <p>12:00</p>
              <br />
              <img
                class="img-size"
                src="https://cdn4.iconfinder.com/data/icons/iconsland-weather/PNG/256x256/Sunny.png"
                alt="Sunny"
              />
              <br />
              <p>17C</p>
            </div>
            <div class="flex-box5">
              <p>15:00</p>
              <br />
              <img
                class="img-size"
                src="https://cdn4.iconfinder.com/data/icons/iconsland-weather/PNG/256x256/Sunny.png"
                alt="Sunny"
              />
              <br />
              <p>18C</p>
            </div>
            <div class="flex-box6">
              <p>18:00</p>
              <br />
              <img
                class="img-size"
                src="https://cdn4.iconfinder.com/data/icons/iconsland-weather/PNG/256x256/Sunny.png"
                alt="Sunny"
              />
              <br />
              <p>16C</p>
            </div>
            <div class="flex-box7">
              <p>21:00</p>
              <br />
              <img
                class="img-size"
                src="https://cdn4.iconfinder.com/data/icons/iconsland-weather/PNG/256x256/Snow_Occasional.png"
                alt="SnowOcassional"
              />
              <br />
              <p>13C</p>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
