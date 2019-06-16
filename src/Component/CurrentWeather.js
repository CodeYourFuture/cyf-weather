import React, { Component } from 'react';

import clear from '../img/weather-icons/clear.svg';
import cloudy from '../img/weather-icons/cloudy.svg';
import drizzle from '../img/weather-icons/drizzle.svg';
import fog from '../img/weather-icons/fog.svg';
import mostlycloudy from '../img/weather-icons/mostlycloudy.svg';
import partlycloudy from '../img/weather-icons/partlycloudy.svg';
import rain from '../img/weather-icons/rain.svg';
import snow from '../img/weather-icons/snow.svg';
import storm from '../img/weather-icons/storm.svg';
import unknown from '../img/weather-icons/unknown.svg';

class CurrentWeather extends Component {
  render() {
    console.log(this.props.data);
    return (
      <div>
        <main className="app_main">
          <div className="main_pic">
            <img 
              src={partlycloudy}
              alt="partlycloudy"
              height="200"
              width="200"
              className="main_pic_icon"
            />
          </div>
          <div className="overcast">Overcast Cloud</div>
          <div className="temp">
            Temprature <span className="digit">10°C to 11°C</span>
          </div>

          <div className="humidity_pressure">
            <div>
              Humidity <span className="digit"> 78 </span>
            </div>
            <div>
              Pressure <span className="digit">1008.48</span>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default CurrentWeather;
