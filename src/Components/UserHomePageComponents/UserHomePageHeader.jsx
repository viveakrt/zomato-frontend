import React, { Component } from "react";
import Logout from "./Logout";
import SelectCity from "./SelectCity";

export class UserHomePageHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="user-home-page-header">
          <nav>
            <div class="row">
              <div class="col-sm-4 col-md-4 col-lg-4">
                <h1>Zomato</h1>
              </div>
              <div class="col-sm-4 col-md-4 col-lg-4">
                <SelectCity />
              </div>
              <div class="col-sm-4 col-md-4 col-lg-4">
                <Logout />
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-12">
                <p>Discover the best food & drinks</p>
              </div>
            </div>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}

export default UserHomePageHeader;
