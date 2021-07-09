import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Navbar from "./Components/Navbar.jsx";
import SignIn from "./Components/NavbarComponents/SignIn";
import SignUp from "./Components/NavbarComponents/SignUp";
import Header from "./Components/Header";
import UserHomePage from "./Components/UserHomePage";
import Hotel from "./Components/UserHomePageComponents/Hotel";
import "./Components/css/style.css";
import "./Components/css/navbar.css";

import React, { Component } from "react";

export class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {this.props.isUserLogin === false && <Navbar />}
          <Switch>
            <Route path="/" exact component={Header} />
            <Route path="/signin" exact component={SignIn} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/homepage" exact component={UserHomePage} />
            <Route path="/restaurant" exact component={Hotel} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return { isUserLogin: state.isUserLogin };
};

export default connect(mapStateToProps, null)(App);
