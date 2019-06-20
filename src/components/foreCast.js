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
                    <span>&#8451;</span>
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
                {this.props.time1 && (
                  <h3 className="weather2__key">
                    <span className="weather__value1"> {this.props.time1}</span>
                  </h3>
                )}
              </div>
            </li>
            <li>
              <div className="forecast-icn">
                {this.props.icn1 && (
                  <img
                    className="img-icons"
                    alt="icons"
                    src={`http://openweathermap.org/img/w/${
                      this.props.icn1
                    }.png`}
                  />
                )}
              </div>
            </li>
            <li>
              <div className="forecast-icn">
                {this.props.temp1 && (
                  <h3 className="weather2__key">
                    <span className="weather__value1"> {this.props.temp1}</span>
                    <span>&#8451;</span>
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
                {this.props.time2 && (
                  <h3 className="weather2__key">
                    <span className="weather__value1"> {this.props.time2}</span>
                  </h3>
                )}
              </div>
            </li>
            <li>
              <div className="forecast-icn">
                {this.props.icn2 && (
                  <img
                    className="img-icons"
                    alt="icons"
                    src={`http://openweathermap.org/img/w/${
                      this.props.icn2
                    }.png`}
                  />
                )}
              </div>
            </li>
            <li>
              <div className="forecast-icn">
                {this.props.temp2 && (
                  <h3 className="weather2__key">
                    <span className="weather__value1"> {this.props.temp2}</span>
                    <span>&#8451;</span>
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
                {this.props.time3 && (
                  <h3 className="weather2__key">
                    <span className="weather__value1"> {this.props.time3}</span>
                  </h3>
                )}
              </div>
            </li>
            <li>
              <div className="forecast-icn">
                {this.props.icn3 && (
                  <img
                    className="img-icons"
                    alt="icons"
                    src={`http://openweathermap.org/img/w/${
                      this.props.icn3
                    }.png`}
                  />
                )}
              </div>
            </li>
            <li>
              <div className="forecast-icn">
                {this.props.temp3 && (
                  <h3 className="weather2__key">
                    <span className="weather__value1"> {this.props.temp3}</span>
                    <span>&#8451;</span>
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
                {this.props.time4 && (
                  <h3 className="weather2__key">
                    <span className="weather__value1"> {this.props.time4}</span>
                  </h3>
                )}
              </div>
            </li>
            <li>
              <div className="forecast-icn">
                {this.props.icn4 && (
                  <img
                    className="img-icons"
                    alt="icons"
                    src={`http://openweathermap.org/img/w/${
                      this.props.icn4
                    }.png`}
                  />
                )}
              </div>
            </li>
            <li>
              <div className="forecast-icn">
                {this.props.temp4 && (
                  <h3 className="weather2__key">
                    <span className="weather__value1"> {this.props.temp4}</span>
                    <span>&#8451;</span>
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
                {this.props.time5 && (
                  <h3 className="weather2__key">
                    <span className="weather__value1"> {this.props.time5}</span>
                  </h3>
                )}
              </div>
            </li>
            <li>
              <div className="forecast-icn">
                {this.props.icn5 && (
                  <img
                    className="img-icons"
                    alt="icons"
                    src={`http://openweathermap.org/img/w/${
                      this.props.icn5
                    }.png`}
                  />
                )}
              </div>
            </li>
            <li>
              <div className="forecast-icn">
                {this.props.temp5 && (
                  <h3 className="weather2__key">
                    <span className="weather__value1"> {this.props.temp5}</span>
                    <span>&#8451;</span>
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
                {this.props.time6 && (
                  <h3 className="weather2__key">
                    <span className="weather__value1"> {this.props.time6}</span>
                  </h3>
                )}
              </div>
            </li>
            <li>
              <div className="forecast-icn">
                {this.props.icn6 && (
                  <img
                    className="img-icons"
                    alt="icons"
                    src={`http://openweathermap.org/img/w/${
                      this.props.icn6
                    }.png`}
                  />
                )}
              </div>
            </li>
            <li>
              <div className="forecast-icn">
                {this.props.temp6 && (
                  <h3 className="weather2__key">
                    <span className="weather__value1"> {this.props.temp6}</span>
                    <span>&#8451;</span>
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
