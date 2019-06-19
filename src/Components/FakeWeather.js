import React, { Component } from "react";
//import FakeWeather from "./data/FakeWeather.json";

class FakeWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {FakeWeather.map((FakeWeatherDetails, index) => {
          return <div>{FakeWeatherDetails.weather}</div>;
        })}
      </div>
    );
  }
}
export default FakeWeather;
