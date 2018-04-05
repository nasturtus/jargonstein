import React, { Component } from "react";
import Caption from "./Caption";
import { Link } from "react-router-dom";
import "../Styles/LandingPage.css";
import Typing from "react-typing-animation";

// since this component only has a render() method, it can be simplified to become a functional component
class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page-grid-container">
        <div className="grid-item">
          <Caption />
        </div>
        <div className="grid-item">
          <Typing>
            <p className="intro-copy">
              Discover a new jargon. And find related news mentions.{" "}
            </p>
          </Typing>
        </div>
        <div>
          <Link to="/jargonstein" className="landing-page-link">
            {" "}
            <button className="landing-page-button" onClick={this.handleClick}>
              {" "}
              Start Exploring
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default LandingPage;
