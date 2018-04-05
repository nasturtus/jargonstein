import React, { Component } from "react";

// nice attempt to include a search feature. I think this would be a really nice touch to your app. Do complete this feature when you have the time!
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
