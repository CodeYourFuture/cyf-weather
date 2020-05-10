import React from "react";

// import cloudy from "../img/weather-icons/cloudy.svg";
import getWeatherIcon from "../utilities/getWeatherIcon";

import moment from "moment";

// create an object that contains things i need to access and access them via the properties eg: .

const Upcoming = props => {
  const forecast8 = props.weather.list.map(function(item) {
    return {
      dt: moment(item.dt * 1000),
      id: item.weather[0].id,
      temp: Math.floor(item.main.temp) + "°C"
    };
  });
  return (
    <div className="upcoming">
      {forecast8.map((forecast, i) => {
        return (
          <div key={i}>
            <div className="time">{forecast.dt.format("hh:mm")}</div>
            <img src={getWeatherIcon(forecast.id)} alt="weather icons" />
            <div className="degree">{forecast.temp}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Upcoming;

//map requires a key?
//the key is index and forecast will be applied to each thing in the index.
