import React from "react";

class Forecast extends React.Component {
  render() {
    return (
      <div className="description-info">
        {this.props.temprature && <p>{this.props.temprature}</p>}
      </div>
    );
  }
}

export default Forecast;
