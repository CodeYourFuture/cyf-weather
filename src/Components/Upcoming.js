import React from "react";
import clear from "../img/weather-icons/clear.svg";
// import cloudy from "../img/weather-icons/cloudy.svg";
import drizzle from "../img/weather-icons/drizzle.svg";
import storm from "../img/weather-icons/storm.svg";
import snow from "../img/weather-icons/snow.svg";
import fog from "../img/weather-icons/fog.svg";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";
import rain from "../img/weather-icons/rain.svg";
import weather from "../data/weather.json";
import moment from "moment";

const forecast8 = weather.list.map(function(item) {
  return {
    dt: moment(item.dt * 1000),
    id: item.weather[0].id,
    temp: Math.floor(item.main.temp) + "°C"
  };
});
// create an object that contains things i need to access and access them via the properties eg: .

const getWeatherIcon = weatherId => {
  console.log(weatherId);
  if (weatherId < 300) {
    //TODO: this is not complete - it ALWAYS returns the same thing!
    return storm;
  } else if (weatherId < 499) {
    return drizzle;
  } else if (weatherId < 599) {
    return rain;
  } else if (weatherId < 699) {
    return snow;
  } else if (weatherId < 799) {
    return fog;
  } else if (weatherId == 800) {
    return clear;
  } else if (weatherId == 801) {
    return partlycloudy;
  } else if (weatherId > 801 && weatherId < 805) {
    return mostlycloudy;
  }
};

const Upcoming = () => {
  return (
    <div className="upcoming">
      {forecast8.map(forecast => {
        console.log(forecast);
        let iconsource = getWeatherIcon(forecast.id);
        console.log(iconsource);
        return (
          <div>
            <div className="time">{forecast.dt.format("hh:mm")}</div>
            <img src={iconsource} />
            <div className="degree">{forecast.temp}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Upcoming;
