import React from "react";

class Weather extends React.Component {
  render() {
    const {
      icon,
      condition,
      temperature,
      humidity,
      pressure,
      error
    } = this.props;
    return (
      <div className="weather-info">
        {this.props.icon && (
          <div>
            <img
              className="img-icons-main"
              alt="icons"
              src={`http://openweathermap.org/img/w/${icon}.png`}
            />
          </div>
        )}
        <div className="description-info">
          {this.props.condition && (
            <h3 className="weather2__key">
              <span className="weather__value1"> {condition}</span>
            </h3>
          )}
        </div>
        {this.props.temperature && (
          <h3 className="weather2__key">
            <b>Temperature:</b>
            <span className="weather__value1"> {temperature}</span>
            <span>&#8451;</span>.
          </h3>
        )}
        <div className="weather-info2">
          {this.props.humidity && (
            <p className="weather1__key">
              Humidity:
              <span className="weather__value"> {humidity}</span>
            </p>
          )}
          {this.props.pressure && (
            <p className="weather3__key">
              Pressure:
              <span className="weather__value"> {pressure}</span>
            </p>
          )}{" "}
        </div>
        {this.props.error && <p className="weather__error">{error}</p>}
      </div>
    );
  }
}

export default Weather;
