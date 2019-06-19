import React from "react";

class foreCast extends React.Component {
  render() {
    return (
      <div className="forecast-container">
        <div>
          <ul>
            <li>
              <div className="forecast-icn">
                {this.props.time && (
                  <h3 className="weather2__key">
                    <span className="weather__value1"> {this.props.time}</span>
                  </h3>
                )}
              </div>
            </li>
            <li>
              <div className="forecast-icn">
                {this.props.icn && (
                  <img
                    className="img-icons"
                    alt="icons"
                    src={`http://openweathermap.org/img/w/${
                      this.props.icn
                    }.png`}
                  />
                )}
              </div>
            </li>
            <li>
              <div className="forecast-icn">
                {this.props.temp && (
                  <h3 className="weather2__key">
                    <span className="weather__value1"> {this.props.temp}</span>
                  </h3>
                )}
              </div>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <div className="forecast-icn">
                {this.props.time && (
                  <h3 className="weather2__key">
                    <span className="weather__value1"> {this.props.time}</span>
                  </h3>
                )}
              </div>
            </li>
            <li>
              <div className="forecast-icn">
                {this.props.temp && (
                  <img
                    className="img-icons"
                    alt="icons"
                    src={`http://openweathermap.org/img/w/${
                      this.props.icn
                    }.png`}
                  />
                )}
              </div>
            </li>
            <li>
              <div className="forecast-icn">
                {this.props.temp && (
                  <h3 className="weather2__key">
                    <span className="weather__value1"> {this.props.temp}</span>
                  </h3>
                )}
              </div>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <div className="forecast-icn">
                {this.props.temp && (
                  <h3 className="weather2__key">
                    <span className="weather__value1"> {this.props.time}</span>
                  </h3>
                )}
              </div>
            </li>
            <li>
              <div className="forecast-icn">
                {this.props.temp && (
                  <img
                    className="img-icons"
                    alt="icons"
                    src={`http://openweathermap.org/img/w/${
                      this.props.icn
                    }.png`}
                  />
                )}
              </div>
            </li>
            <li>
              <div className="forecast-icn">
                {this.props.temp && (
                  <h3 className="weather2__key">
                    <span className="weather__value1"> {this.props.temp}</span>
                  </h3>
                )}
              </div>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <div className="forecast-icn">
                {this.props.temp && (
                  <h3 className="weather2__key">
                    <span className="weather__value1"> {this.props.time}</span>
                  </h3>
                )}
              </div>
            </li>
            <li>
              <div className="forecast-icn">
                {this.props.temp && (
                  <img
                    className="img-icons"
                    alt="icons"
                    src={`http://openweathermap.org/img/w/${
                      this.props.icn
                    }.png`}
                  />
                )}
              </div>
            </li>
            <li>
              <div className="forecast-icn">
                {this.props.temp && (
                  <h3 className="weather2__key">
                    <span className="weather__value1"> {this.props.temp}</span>
                  </h3>
                )}
              </div>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <div className="forecast-icn">
                {this.props.temp && (
                  <h3 className="weather2__key">
                    <span className="weather__value1"> {this.props.time}</span>
                  </h3>
                )}
              </div>
            </li>
            <li>
              <div className="forecast-icn">
                {this.props.temp && (
                  <img
                    className="img-icons"
                    alt="icons"
                    src={`http://openweathermap.org/img/w/${
                      this.props.icn
                    }.png`}
                  />
                )}
              </div>
            </li>
            <li>
              <div className="forecast-icn">
                {this.props.temp && (
                  <h3 className="weather2__key">
                    <span className="weather__value1"> {this.props.temp}</span>
                  </h3>
                )}
              </div>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <div className="forecast-icn">
                {this.props.temp && (
                  <h3 className="weather2__key">
                    <span className="weather__value1"> {this.props.time}</span>
                  </h3>
                )}
              </div>
            </li>
            <li>
              <div className="forecast-icn">
                {this.props.temp && (
                  <img
                    className="img-icons"
                    alt="icons"
                    src={`http://openweathermap.org/img/w/${
                      this.props.icn
                    }.png`}
                  />
                )}
              </div>
            </li>
            <li>
              <div className="forecast-icn">
                {this.props.temp && (
                  <h3 className="weather2__key">
                    <span className="weather__value1"> {this.props.temp}</span>
                  </h3>
                )}
              </div>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <div className="forecast-icn">
                {this.props.temp && (
                  <h3 className="weather2__key">
                    <span className="weather__value1"> {this.props.time}</span>
                  </h3>
                )}
              </div>
            </li>
            <li>
              <div className="forecast-icn">
                {this.props.temp && (
                  <img
                    className="img-icons"
                    alt="icons"
                    src={`http://openweathermap.org/img/w/${
                      this.props.icn
                    }.png`}
                  />
                )}
              </div>
            </li>
            <li>
              <div className="forecast-icn">
                {this.props.temp && (
                  <h3 className="weather2__key">
                    temp:
                    <span className="weather__value1"> {this.props.temp}</span>
                  </h3>
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default foreCast;
