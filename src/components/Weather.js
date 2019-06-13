import React from "react";

class Weather extends React.Component {
  render() {
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
