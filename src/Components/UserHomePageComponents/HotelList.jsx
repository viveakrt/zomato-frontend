import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

export class HotelList extends Component {
  state = {
    hotel: [],
    isLoading: false,
  };
  setRestaurant_id = (id) => {
    localStorage.setItem("restaurantId", id);
  };
  componentDidMount() {
    const config = {
      headers: { Authorization: localStorage.getItem("token") },
    };
    console.log(config);

    axios
      .get("https://zomato-clonee.herokuapp.com/all", config)
      .then((res) => {
        console.log(res.data);
        this.setState({ hotel: [...res.data] });
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  }
  render() {
    console.log("this.props.cityName " + this.props.cityName);
    console.log(this.state.hotel);
    return (
      <React.Fragment>
        <h1 class="city-hotel">Food Delivery in your city</h1>
        <div className="hotel-container">
          {this.state.hotel.map((restaurant) => {
            if (
              this.props.cityName === "all" ||
              this.props.cityName === restaurant.city_name
            ) {
              return (
                <Link
                  to={"/restaurant/"}
                  onClick={() =>
                    this.setRestaurant_id(restaurant.id_restaurant)
                  }
                >
                  <div class="card h-100">
                    <img
                      class="card-img-top "
                      src={restaurant.restaurant_image}
                      alt={restaurant.restaurant_name}
                    />
                    <div class="card-body">
                      <h5 class="card-title">{restaurant.restaurant_name}</h5>
                      <p class="card-text">{restaurant.description}</p>
                    </div>
                  </div>
                </Link>
              );
            } else {
              return null;
            }
          })}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { cityName: state.city };
};

export default connect(mapStateToProps, null)(HotelList);
