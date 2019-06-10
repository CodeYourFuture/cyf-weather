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
            src="https://cdn4.iconfinder.com/data/icons/iconsland-weather/PNG/256x256/Sunny.png"
            alt="Sunny"
          />
          <h3 class="temp">
            <b>Temprature</b>&nbsp;&nbsp;&nbsp;10 to 11 C&nbsp;
          </h3>
          <h5 class="tempInfo">
            <br />
            <b>Humidity&nbsp; 78%</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <b>Pressure&nbsp; 100848</b>
          </h5>
          <br />
          <br />
          <br />
          <table class="table">
            <tr>
              <td>03:00</td>
              <td>06:00</td>
              <td>09:00</td>
              <td>12:00</td>
              <td>15:00</td>
              <td>18:00</td>
              <td>21:00</td>
            </tr>
            <br />
            <tr>
              <td>
                <img
                  class="img-size"
                  src="https://cdn4.iconfinder.com/data/icons/iconsland-weather/PNG/256x256/Snow_Occasional.png"
                />
              </td>
              <td>
                <img
                  class="img-size"
                  src="https://cdn4.iconfinder.com/data/icons/iconsland-weather/PNG/256x256/Snow_Occasional.png"
                  alt="SnowOcassional"
                />
              </td>
              <td>
                <img
                  class="img-size"
                  src="https://cdn4.iconfinder.com/data/icons/iconsland-weather/PNG/256x256/Sunny.png"
                  alt="Sunny"
                />
              </td>
              <td>
                <img
                  class="img-size"
                  src="https://cdn4.iconfinder.com/data/icons/iconsland-weather/PNG/256x256/Sunny.png"
                  alt="Sunny"
                />
              </td>
              <td>
                <img
                  class="img-size"
                  src="https://cdn4.iconfinder.com/data/icons/iconsland-weather/PNG/256x256/Sunny.png"
                  alt="Sunny"
                />
              </td>
              <td>
                <img
                  class="img-size"
                  src="https://cdn4.iconfinder.com/data/icons/iconsland-weather/PNG/256x256/Sunny.png"
                  alt="Sunny"
                />
              </td>
              <td>
                <img
                  class="img-size"
                  src="https://cdn4.iconfinder.com/data/icons/iconsland-weather/PNG/256x256/Snow_Occasional.png"
                  alt="SnowOccational"
                />
              </td>
            </tr>
            <br />
            <tr>
              <td>8C</td>
              <td>9C</td>
              <td>14C</td>
              <td>17C</td>
              <td>18C</td>
              <td>16C</td>
              <td>13C</td>
            </tr>
          </table>
        </main>
      </div>
    );
  }
}

export default App;
