import React, { Component } from "react";
import UserHomePageHeader from "./UserHomePageComponents/UserHomePageHeader";
import ZomatoService from "./UserHomePageComponents/ZomatoService";
import HotelList from "./UserHomePageComponents/HotelList";
import "./css/user-home-page.css";

export class UserHomePage extends Component {
  state = {
    chooseCity: "all",
  };
  selectCity = (cityName) => {
    this.setState({
      chooseCity: "all/" + cityName,
    });
  };
  render() {
    return (
      <React.Fragment>
        <UserHomePageHeader />
        <ZomatoService />
        <HotelList />
        {/* <Hotel /> */}
      </React.Fragment>
    );
  }
}

export default UserHomePage;
