import React from "react";

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.getWeather}>
        <input
          type="text"
          name="city"
          spellcheck="false"
          placeholder="Type in a city name"
        />

        <button>GET WEATHER</button>
      </form>
    );
  }
}

export default Form;
