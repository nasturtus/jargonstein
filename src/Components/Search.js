import React, { Component } from "react";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      values: ["Cat", "Dog", "Octopus"]
    };
  }

  render() {
    return (
      <div>
        <input
          type="text"
          id="searchInput"
          value="Curious about a jargon? Start typing.."
          size="40"
        />
      </div>
    );
  }
}

export default Search;
