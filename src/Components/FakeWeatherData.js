import React, { Component } from "react";
import FakeWeather from "../data/FakeWeather.json";

class FakeWeatherData extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {FakeWeather.map((weather, index) => {
          return <h1>{weather.main}</h1>;
        })}
      </div>
    );
  }
}
export default FakeWeatherData;
