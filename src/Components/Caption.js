import React, { Component } from "react";
import "../Styles/Caption.css";

class Caption extends Component {
  render() {
    return (
      <div className="caption-div">
          <p> 
            {/* I think you can just inline this.state.heading and this.state.subheading 
            if you're not gonna pass these state variables down.
            And then this can be a simple functional component  */}
            <caption-heading>Jargonstein</caption-heading>
          </p>
          <p>
            <caption-subheading>A Jargon Buster for the Curious & Clueless</caption-subheading>
          </p>
      </div>
    );
  }
}

export default Caption;
