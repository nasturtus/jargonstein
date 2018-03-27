import React, { Component } from "react";
import Caption from "./Components/Caption";
import Jargon from "./Components/Jargon";
import Search from "./Components/Search";

import "./Styles/App.css";

class App extends Component {
  render() {
    return (
      <div className="grid-container">
        <div className="grid-item">
          <Caption />
        </div>
        <div className="grid-item-search">
          <Search />
        </div>
        <div className="grid-item">
          <Jargon />
        </div>
      </div>
    );
  }
}

export default App;
