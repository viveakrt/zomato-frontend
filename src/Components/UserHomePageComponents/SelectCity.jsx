import React, { Component } from "react";
import { Link } from "react-router-dom";
import { selectCity } from "../Redux/Index";
import { connect } from "react-redux";

export class SelectCity extends Component {
  setCity = (cityName) => {
    this.props.selectCity(cityName);
  };
  render() {
    return (
      <React.Fragment>
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Choose City
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <Link
              class="dropdown-item"
              onClick={() => this.setCity("Bengaluru")}
            >
              Bangalore
            </Link>
            <Link class="dropdown-item" onClick={() => this.setCity("Delhi")}>
              Delhi
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectCity: (city) => dispatch(selectCity(city)),
  };
};

export default connect(null, mapDispatchToProps)(SelectCity);
