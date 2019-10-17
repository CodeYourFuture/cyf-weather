import React, { Component } from "react";
var text = "practise";
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="SearchBar">
        <header className="app__header">
          <section class="search">
            <form action="">
              <input
                class="text"
                placeholder="Type in a city name..."
                name="search"
              />
              <button class="btn">{this.props.buttonTitle}</button>
            </form>
          </section>
        </header>
      </div>
    );
  }
}

export default SearchBar;
