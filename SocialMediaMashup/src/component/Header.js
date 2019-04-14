import React from "react";
import PolyUIcon from "../img/polyu-logo.png";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <div style={{ height: "20px" }}>&nbsp;</div>
        <a href="https://polyuproj.github.io/Mashup/SocialMediaMashup/build/#/">
          <img
            src={PolyUIcon}
            className="App-logo"
            alt="2019 Powerful Social Media Mashup for NBA"
            style={{ width: "300px", height: "58px" }}
          />
        </a>

        <div style={{ height: "20px" }}>&nbsp;</div>
        <div align="center">
          <h3>2019 Powerful Social Media Mashup for NBA</h3>
        </div>
      </header>
    );
  }
}
