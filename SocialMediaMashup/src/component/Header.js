import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div style={{ height: "20px" }}>&nbsp;</div>
        <div align="center">
          <h3>Comp3121 Group Project</h3>
        </div>
      </header>
    );
  }
}
