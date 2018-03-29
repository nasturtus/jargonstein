import React, { Component } from "react";
import Caption from "./Components/Caption";
import Jargon from "./Components/Jargon";
// import Search from "./Components/Search";

import "./Styles/App.css";

class App extends Component {
  render() {
    return (
      <div className="app-grid-container">
        <div className="app-grid-item">
          <Caption />
        </div>
        {/* <div className="app-grid-item-search">
          <Search />
        </div> */}
        <div className="app-grid-item">
          <Jargon />
        </div>
      </div>
    );
  }
}

export default App;
