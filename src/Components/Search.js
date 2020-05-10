import React from "react";

class Search extends React.Component {

  render() {
    return (
      <header className="app__header">
        <div className="searchbar">
          <input
            className="Search"
            value={this.props.city}
            onChange={this.props.changeHandler}
          />
          <button onClick={this.props.handleClick}> FIND WEATHER</button>
        </div>
      </header>
    );
  }
}
export default Search;
//value records what is typed and change updates state.
//when u click the btn it fires fetch function and searches in it and then updates the state with the res.
//line 11 the value is from line 14 in main app. it is passed as props to search. 