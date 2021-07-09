import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./css/navbar.css";

export class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light  ">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbar">
            <div className="navbar-nav">
              <p className="zomato-mobile animate__animated animate__fadeInRight">
                Zomato
              </p>
              <Link to="/signin">Signin</Link>
              <Link to="/signup">Signup</Link>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
