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
        {FakeWeather.list.map((element, index) => {
          return <p>{element.weather[0].main} </p>;
        })}
      </div>
    );
  }
}
export default FakeWeatherData;
