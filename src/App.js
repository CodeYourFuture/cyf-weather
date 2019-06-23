import React, { Component } from "react";
import "./App.css";
import "./grid.css";
import weather from "./data/weather.json";
import Search from "./Components/Search";
import CurrentWeather from "./Components/CurrentWeather";
import Upcoming from "./Components/Upcoming";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: weather,
      city: "London",
      err: ""
    };
  }
  //json data^
  componentDidMount() {
    this.handleClick();
  }

  changeHandler = event => {
    this.setState({
      city: event.target.value
    });
  };

  handleClick = () => {
    console.log("i've been clicked");
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${
        this.state.city
      }&cnt=8&units=metric&appid=${"a75d5e4c8cb937be92dab81195a1c637"}`
    )
      .then(res => res.json())
      .then(res => {
        console.log("anything", res);
        if (res.cod === "200") {
          this.setState({
            weather: res
          });
        }
        if (res.cod !== "200") {
          this.setState({
            err: "invalid city name"
          });
        }
      })
      .catch(err => {
        if (err) {
          this.setState({
            err: "invalid city name"
          });
        }
      });
  };

  //response: what the user typed.

  render() {
    // console.log(this.state);
    return (
      <div className="app">
        <div className="container">
          <Search
            city={this.state.city}
            changeHandler={this.changeHandler}
            handleClick={this.handleClick}
          />
          {this.state.err ? (
            <div className="app__main"> {this.state.err} </div>
          ) : (
            <main className="app__main">
              <CurrentWeather weather={this.state.weather} />
              <Upcoming weather={this.state.weather} />
            </main>
          )}
        </div>
      </div>
    );
  }
}

export default App;
//we moved fetch to app.js to make it avaliable to all components, the search button actions functions are sent to search as props. when somone searches the update is sent back to app and app tells the other components.
//if fetch is in the app then its avaliable to all and its result can be passed via props. howver if the handleclick etc was in search component we hhave to pass them as functions to app.
//the json is one citys data over 8 days. the api is gettin data from the srver for other citys and the server is updated by something else.
//unmount auto unmounts when state changes. unless a setinterval then it needs to explicitly needs to unmount.
