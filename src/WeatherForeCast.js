import React from "./react";

<h1>fake data trial</h1>;
{
  weatherForcastData.list.map((fakeDetails, index) => {
    return <h1> {fakeDetails.main.temp}</h1>;
  });
}
{
  weatherForcastData.list.map((fakeDetails, index) => {
    return <h1> {fakeDetails.weather[0].icon}</h1>;
  });
}

export default WeatherForeCast;
