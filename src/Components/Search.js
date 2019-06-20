import React from "react";

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      search: ""
    };
  }

  changeHandler = event => {
    this.setState({
      search: event.target.value
    });
  };

  handleClick = () => {
    console.log("i've been clicked");
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${
        this.state.search
      }&cnt=8&units=metric&appid=${"a75d5e4c8cb937be92dab81195a1c637"}`
    )
      .then(res => res.json())
      .then(res => console.log(res.list, res.city.name));
  };

  render() {
    return (
      <header className="app__header">
        <div className="searchbar">
          <input
            className="Search"
            value={this.state.search}
            onChange={this.changeHandler}
          />
          <button onClick={this.handleClick}> FIND WEATHER</button>
        </div>
      </header>
    );
  }
}
export default Search;
