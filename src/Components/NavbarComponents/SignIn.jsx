import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import validator from "validator";
import { userLogin } from "../Redux/Index";
import { connect } from "react-redux";
import crossPng from "../image/cross.png";
import axios from "axios";
import "../css/navbar.css";

export class SignIn extends Component {
  state = {
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
    isEmailError: "YES",
    isPasswordError: "YES",
    isLogin: false,
    signInError: "",
  };

  validateEmail = (e) => {
    console.log(e.target.value);
    this.setState({
      email: e.target.value,
    });
    if (validator.isEmpty(e.target.value) === true) {
      this.setState({
        emailError: "Email should not be empty",
        isEmailError: "YES",
      });
    } else if (validator.isEmail(e.target.value) === false) {
      this.setState({
        emailError: "Email should not be empty",
        isEmailError: "YES",
      });
    } else {
      this.setState({
        emailError: "",
        isEmailError: "",
      });
    }
  };
  validatePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
    if (this.state.password === "") {
      this.setState({
        passwordError: "Password should not be empty",
        isPasswordError: "YES",
      });
    } else if (this.state.password.length < 6) {
      this.setState({
        passwordError: "Password must contain at least 6 characters",
        isPasswordError: "YES",
      });
    } else {
      this.setState({
        passwordError: "",
        isPasswordError: "",
      });
    }
  };

  submitEnabled = () => {
    if (
      this.state.isPasswordError === false &&
      this.state.isEmailError === false
    ) {
      return false;
    } else {
      return true;
    }
  };

  handleSubmit = (e) => {
    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log(user);
    e.preventDefault();
    axios
      .post("/user/login", user)
      .then(function (response) {
        return response.data;
      })
      .then((apiData) => {
        console.log(apiData);
        localStorage.setItem("token", apiData.jwtToken);
        localStorage.setItem("username", apiData.userData.customer_name);
        this.setState({
          isLogin: true,
        });
        this.props.userLogin();
      })
      .catch((error) => {
        this.setState({
          signInError: error.response.data.message,
        });
      });
  };
  componentWillUnmount() {
    // fix Warning:  return null when escapse component, it will no longer hold any data in memory
    this.setState = (state, callback) => {
      return;
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="sign-title">
                Sign In
              </h5>
              <Link to="/">
                <span aria-hidden="true" className="close-form">
                  <img src={crossPng} alt="cross" />
                </span>
              </Link>
            </div>
            <div className="modal-body">
              {this.state.signInError !== "" && (
                <p className="error validation-error">
                  {this.state.signInError}
                </p>
              )}
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="user-email"
                    placeholder="Enter email"
                    value={this.state.email}
                    onChange={this.validateEmail}
                  />
                  <p className="validation-error">{this.state.emailError}</p>
                </div>

                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    id="user-password"
                    placeholder="Enter Password"
                    value={this.state.password}
                    onChange={this.validatePassword}
                  />
                  <p className="validation-error">{this.state.passwordError}</p>
                </div>

                <button
                  type="submit"
                  className="btn btn-danger"
                  disabled={
                    this.state.isEmailError + this.state.isPasswordError
                  }
                >
                  Submit
                </button>
              </form>
            </div>
            <p className="text-center">
              Need a Zomato?
              <Link to="/signup">Create account</Link>
            </p>
            {this.state.isLogin === true && <Redirect to="/homepage" />}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: () => dispatch(userLogin()),
  };
};

export default connect(null, mapDispatchToProps)(SignIn);
