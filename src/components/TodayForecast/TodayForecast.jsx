import React from "react";
import Icon from "../Icon/Icon";
import AllIcons from "../Icon/AllIcons";

export function TodayForecast({
  weatherId,
  description,
  temp_min,
  temp_max,
  humidity,
  pressure,
}) {

  // console.log(city);
  // console.log(temp_min);
  // console.log(weatherId);

  if (weatherId !== undefined) {
    return (
      <div>
        <Icon weatherId={weatherId} />
        <h2 className="description">{description}</h2>
        <h3 className="temp">
          Temperature : {temp_min}° to {temp_max}°C
        </h3>

        <div className="current-container">
          <h4 className="humid-press">Humidity : {humidity}%</h4>
          <h4 className="humid-press">Pressure : {pressure}</h4>
        </div>
      </div>
    );
  } else {
    return (
      <div className="getStart">
        <AllIcons name="clear" />
        <div>
          For getting start with my lovely Weather App,
          <br />
          Please insert a city name in the search bar!
        </div>
      </div>
    );
  }
}
