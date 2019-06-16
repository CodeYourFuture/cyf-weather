import React from "react";

class Weather extends React.Component {
  render() {
    function getWeatherMessage(weatherId) {
      if (weatherId < 300) {
        return "drizzle - welcome to london!";
      } else if (weatherId === 300) {
        return "stormy - stay indoors!";
      } else if (weatherId > 300 && weatherId <= 499) {
        return "rain - I love london summer!";
      } else if (weatherId >= 500 && weatherId <= 599) {
        return "snow - do you want to build a snowman?";
      } else if (weatherId >= 600 && weatherId <= 699) {
        return "fog - who said that?  where are you?";
      } else if (weatherId >= 700 && weatherId <= 799) {
        return "clear - the rain has gone!";
      } else if (weatherId === 800) {
        return "clear - the rain has gone!";
      } else if (weatherId === 801) {
        return "partlycloudy - the glass is half-full";
      } else if (weatherId >= 802 && weatherId <= 805) {
        return "mostlycloudy - the glass is half-full of rain-water";
      }
    }

    return (
      <div className="weather-info">
        {this.props.temperature && (
          <h3 className="weather2__key">
            <b>Temperature:</b>
            <span className="weather__value"> {this.props.temperature}</span>
          </h3>
        )}
        {this.props.humidity && (
          <p className="weather1__key">
            Humidity:
            <span className="weather__value"> {this.props.humidity}</span>
          </p>
        )}
        {this.props.description && (
          <p className="weather3__key">
            Conditions:
            <span className="weather__value"> {this.props.description}</span>
          </p>
        )}
        {this.props.error && (
          <p className="weather__error">{this.props.error}</p>
        )}
      </div>
    );
  }
}

export default Weather;
