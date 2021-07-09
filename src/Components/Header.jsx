import React, { Component } from "react";
import "./css/header.css";

export class Header extends Component {
  render() {
    return (
      <header>
        <h1 className="zomato-title">Zomato</h1>
        <br />
        <p>Discover the best food & drinks </p>
      </header>
    );
  }
}

export default Header;
