import React from "react";
import Icon from "../Icon/Icon";

function HourlyForecast({ time, iconId, temp }) {
  const formattedTime = time.split(" ")[1].slice(0, 5);

  return (
    <div className="container">
      <div className="items time">{formattedTime}</div>
      <div className="items">
        <Icon weatherId={iconId} />
      </div>
      <div className="items temperature">{temp}°C</div>
    </div>
  );
}
export default HourlyForecast;
