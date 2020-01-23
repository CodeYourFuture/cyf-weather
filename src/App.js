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
      err: "",
      success: false
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
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${
        this.state.city
      }&cnt=8&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then(res => res.json())
      .then(res => {
        if (res.cod === "200") {
          this.setState({
            weather: res,
            success: true
          });
        }
        if (res.cod !== "200") {
          this.setState({
            err: "invalid city name",
            success: false
          });
        }
      })
      .catch(err => {
        if (err) {
          this.setState({
            err: "Sorry The server could not complete your request",
            success: false
          });
        }
      });
  };

  //response: what the user typed.
  shadesOfBlue(weatherId) {
    if (weatherId < 300) {
      //TODO: this is not complete - it ALWAYS returns the same thing!
      return "#1B4F72";
    } else if (weatherId < 499) {
      return "#2E86C1";
    } else if (weatherId < 599) {
      return "#2E86C1";
    } else if (weatherId < 699) {
      return "#1B4F72";
    } else if (weatherId < 799) {
      return "#85C1E9";
    } else if (weatherId === 800) {
      return "#D6EAF8";
    } else if (weatherId === 801) {
      return "#85C1E9";
    } else if (weatherId > 801 && weatherId < 805) {
      return "#85C1E9";
    } else {
      return "weather update not avaliable";
    }
  }

  render() {
    return (
      <div className="app">
        <div className="container">
          <Search
            city={this.state.city}
            changeHandler={this.changeHandler}
            handleClick={this.handleClick}
          />
          {this.state.success ? (
            <main
              className="app__main"
              style={{
                backgroundColor: this.shadesOfBlue(
                  this.state.weather.list[0].weather[0].id
                )
              }}
            >
              <CurrentWeather weather={this.state.weather} />
              <Upcoming weather={this.state.weather} />
            </main>
          ) : (
            <div className="app__main"> {this.state.err} </div>
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
//if there is an error then line 72 if not then display components.
//default when page loads component did mount. next
//key is to keep track who is using the api
//other if is if person makes a mistake and catch err is if server cant get the api
//if sucess then setstate if not then show error.
//cod is from the json
