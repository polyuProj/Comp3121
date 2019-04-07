import React from "react";
import PolyUIcon from "../img/polyu-logo.png";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <div style={{ height: "20px" }}>&nbsp;</div>
        <img
          src={PolyUIcon}
          className="App-logo"
          alt="logo"
          style={{ width: "300px", height: "58px" }}
        />
        <div style={{ height: "20px" }}>&nbsp;</div>
        <div align="center">
          <h3>2019 Powerful Social Media Mashup</h3>
        </div>
      </header>
    );
  }
}
