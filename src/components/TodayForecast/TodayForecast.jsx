import React from "react";
import Icon from "../Icon/Icon";

export function TodayForecast({
  weatherId,
  description,
  temp_min,
  temp_max,
  humidity,
  pressure,
}) {
    console.log(weatherId);
    console.log(description);
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
}
