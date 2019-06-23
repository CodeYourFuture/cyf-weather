import React from "react";

class ForeCast extends React.Component {
  render() {
    return (
      <div className="forecast-container">
        {this.props.data.list.map((item, index) => {
          return (
            <div className="forecast-3hour">
              <p>time</p>
              <img src={"icon"} alt="icon" />
              <p>temp:</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ForeCast;
