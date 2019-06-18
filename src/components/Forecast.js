import React from "react";
import cloudy from "../img/weather-icons/cloudy.svg";
import drizzle from "../img/weather-icons/drizzle.svg";
import fog from "../img/weather-icons/fog.svg";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";
import rain from "../img/weather-icons/rain.svg";
import storm from "../img/weather-icons/storm.svg";

class Forecast extends React.Component {
  state = {
    city: "",
    temp: "",
    hours: "",
    icons: ""
  };
  loadWeather = async e => {
    e.preventDefault();

    const api = await fetch();
    const forcast = await api.json();
    console.log(forcast);
  };
  render() {
    return (
      <div className="weather-forcast">
        <p>
          03:00
          <br />
          <br />
          <img src={cloudy} alt="cloudy" height="42" width="42" />
          <br />
          <br />
          13&deg;C
        </p>
        <p>
          06:00
          <br />
          <br />
          <img src={drizzle} alt="drizzle" height="42" width="42" />
          <br />
          <br />
          13&deg;C
        </p>
        <p>
          09:00
          <br />
          <br />
          <img src={fog} alt="fog" height="42" width="42" />
          <br />
          <br />
          13&deg;C
        </p>
        <p>
          12:00
          <br />
          <br />
          <img src={partlycloudy} alt="partlycloudy" height="42" width="42" />
          <br />
          <br />
          13&deg;C
        </p>
        <p>
          15:00
          <br />
          <br />
          <img src={rain} alt="rain" height="50" width="50" />
          <br />
          <br />
          13&deg;C
        </p>
        <p>
          18:00
          <br />
          <br />
          <img src={storm} alt="storm" height="42" width="42" />
          <br />
          <br />
          13&deg;C
        </p>
        <p>
          21:00
          <br />
          <br />
          <img src={storm} alt="storm" height="42" width="42" />
          <br />
          <br />
          13&deg;C
        </p>
      </div>
    );
  }
}

export default Forecast;
