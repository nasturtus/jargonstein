import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Styles/Caption.css";

class Caption extends Component {
  constructor() {
    super();
    this.state = {
      heading: "Jargonstein",
      subheading: "A Jargon Buster for the Curious & Clueless"
    };
  }

  render() {
    return (
      <div className="caption-div">
        <Link to="/" className="caption-links">
          <p>
            <caption-heading>{this.state.heading}</caption-heading>
          </p>
          <p>
            <caption-subheading>{this.state.subheading}</caption-subheading>
          </p>
        </Link>
      </div>
    );
  }
}

export default Caption;
