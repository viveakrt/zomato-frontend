import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userLogout } from "../Redux/Index";

export class Logout extends Component {
  state = { userName: window.localStorage.getItem("username") };
  logoutUser = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    this.props.userLogout();
  };
  render() {
    return (
      <div>
        <div className="btn-group userName">
          <button
            type="button"
            className="btn btn-danger dropdown-toggle"
            data-toggle="dropdown"
          >
            {this.state.userName}
          </button>
          <div className="dropdown-menu">
            <Link
              to="/"
              className="dropdown-item"
              href="#"
              onClick={this.logoutUser}
            >
              Logout
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userLogout: () => dispatch(userLogout()),
  };
};

export default connect(null, mapDispatchToProps)(Logout);
