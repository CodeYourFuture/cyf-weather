import React from "react";

class Weather extends React.Component {
  render() {
    return (
      <div className="weather-info">
        {this.props.icon && (
          <div>
            <img
              className="img-icons"
              alt="icns"
              src={`http://openweathermap.org/img/w/${this.props.icon}.png`}
            />
          </div>
        )}
        <div className="description-info">
          {this.props.description && <h3>{this.props.description}</h3>}
        </div>
        {this.props.temperature && (
          <h3 className="weather2__key">
            <b>Temperature:</b>
            <span className="weather__value1"> {this.props.temperature}</span>
            <span>&#8451;</span>.
          </h3>
        )}

        <div className="weather-info2">
          {this.props.humidity && (
            <p className="weather1__key">
              Humidity:
              <span className="weather__value"> {this.props.humidity}</span>
            </p>
          )}
          {this.props.pressure && (
            <p className="weather3__key">
              Pressure:
              <span className="weather__value"> {this.props.pressure}</span>
            </p>
          )}{" "}
        </div>

        {this.props.error && (
          <p className="weather__error">{this.props.error}</p>
        )}
      </div>
    );
  }
}

export default Weather;
