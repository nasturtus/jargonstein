import React, { Component } from "react";
import { Route } from "react-router-dom";
import App from "./App";
import LandingPage from "./Components/LandingPage";

class AppRouter extends Component {
  render() {
    return (
      <div>
        {/* Links */}
        {/* <Link to="/"></Link>
        <Link to="/start"></Link> */}

        {/* Routes */}
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/jargonstein" component={App} />
      </div>
    );
  }
}

export default AppRouter;
