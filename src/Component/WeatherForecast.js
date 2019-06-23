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

class WeatherForecast extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div className="app_main">
        <div className="twentyfour_hours  md-col-7 ">
          <div>
            {this.props.data.list.map((item, i) => {
              return (
                <div key={i}>
                  <span className="time">{item.dt}</span>
                  <img className="icon" src={'icon'} alt="icon" />
                  <span className="degree">{item.main.temp}</span>
                </div>
              );
            })}
            ;
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherForecast;
