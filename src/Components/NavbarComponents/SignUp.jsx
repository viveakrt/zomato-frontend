import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import validator from "validator";
import { userLogin } from "../Redux/Index";
import { connect } from "react-redux";
import axios from "axios";
import "../css/navbar.css";
import crossPng from "../image/cross.png";

export class SignUp extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    nameError: "",
    emailError: "",
    passwordError: "",
    isEmailError: "YES",
    isPasswordError: "YES",
    isNameError: "YES",
    isCheckboxChecked: "NO",
    isSignUp: false,
    signUpError: "",
  };

  validateName = (e) => {
    this.setState({
      name: e.target.value,
    });
    if (validator.isEmpty(e.target.value) === true) {
      this.setState({
        nameError: "Name should not be empty",
        isNameError: "YES",
      });
    } else {
      this.setState({
        nameError: "",
        isNameError: "",
      });
    }
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
        emailError: "Invalid Email",
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

  clickedCheckbox = () => {
    if (this.state.isCheckboxChecked === "NO") {
      this.setState({
        isCheckboxChecked: "",
      });
    } else {
      this.setState({
        isCheckboxChecked: "NO",
      });
    }
  };

  handleSubmit = (e) => {
    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };
    console.log(user);
    e.preventDefault();
    axios
      .post("/user/register", user)
      .then(function (response) {
        return response.data;
      })
      .then((apiData) => {
        console.log(apiData);
        console.log(apiData);
        localStorage.setItem("token", apiData.jwtToken);
        localStorage.setItem("username", apiData.userData.customer_name);
        this.setState({
          isLogin: true,
        });
        this.props.userLogin();
      })
      .catch((error) => {
        console.log(error.response.data.message);
        this.setState({
          signUpError: error.response.data.message,
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
              <h5 className="modal-title" id="signup-title">
                Sign up
              </h5>
              <Link to="/">
                <span aria-hidden="true" className="close-form">
                  <img src={crossPng} alt="cross" />
                </span>
              </Link>
            </div>
            <div className="modal-body">
              {this.state.signUpError !== "" && (
                <p className="error validation-error">
                  {this.state.signUpError}
                </p>
              )}
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="user-name"
                    placeholder="Enter Full Name"
                    value={this.state.name}
                    onChange={this.validateName}
                  />
                  <p className="validation-error">{this.state.nameError}</p>
                </div>
                <div className="form-group">
                  <input
                    type="email"
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

                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="terms-condition"
                    onClick={this.clickedCheckbox}
                  />
                  <label className="form-check-label">
                    I agree to Zomato's Terms of Service, Privacy Policy and
                    Content Policies
                  </label>
                </div>

                {/* disable submit button for empty string */}
                <button
                  type="submit"
                  className="btn btn-danger"
                  disabled={
                    this.state.isEmailError +
                    this.state.isPasswordError +
                    this.state.isNameError +
                    this.state.isCheckboxChecked
                  }
                >
                  Submit
                </button>

                {this.state.isLogin === true && <Redirect to="/homepage" />}
              </form>
            </div>

            <p className="text-center">
              Already have Account
              <Link to="/signin">Signin</Link>
            </p>
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

export default connect(null, mapDispatchToProps)(SignUp);
