import React from "react";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";
import getWeatherIcon from "../utilities/getWeatherIcon";

const CurrentWeather = props => {
  return (
    <div className="Todaysweather">
      <img
        className="currentoverview"
        src={getWeatherIcon(props.weather.list[0].weather[0].id)}
      />
      <div className="overview">overcast clouds</div>
      <div className="temperature">
        <span className="data-heading"> Temperature</span>{" "}
        {props.weather.list[0].main.temp}
      </div>
      <div className="characteristics">
        <div>
          <span className="data-heading"> Humidity</span>{" "}
          {props.weather.list[0].main.humidity}
        </div>
        <div>
          <span className="data-heading">Pressure</span>{" "}
          {props.weather.list[0].main.pressure}
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;

//line4: give data as parameter.
