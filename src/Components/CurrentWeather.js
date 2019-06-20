import React from "react";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";

const CurrentWeather = () => {
  return (
    <div className="Todaysweather">
      <img className="currentoverview" src={partlycloudy} />
      <div className="overview">overcast clouds</div>
      <div className="temperature">
        <span className="data-heading"> Temperature</span> 10 to 11°C
      </div>
      <div className="characteristics">
        <div>
          <span className="data-heading"> Humidity</span> 78%
        </div>
        <div>
          <span className="data-heading">Pressure</span> 1008.48
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
