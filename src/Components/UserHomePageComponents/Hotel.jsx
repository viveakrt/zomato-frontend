import React, { Component } from "react";
import axios from "axios";

export class Hotel extends Component {
  componentDidMount() {
    const config = {
      headers: { Authorization: localStorage.getItem("token") },
    };
    console.log(config);

    axios
      .get(
        "https://zomato-clonee.herokuapp.com/restaurant/" +
          localStorage.getItem("restaurantId"),
        config
      )
      .then((res) => {
        console.log(res.data);
        this.setState({ hotel: [...res.data] });
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  }
  render() {
    return (
      <React.Fragment>
        <div className="hotel">
          <div className="hotel-img">
            <img
              src="https://b.zmtcdn.com/data/pictures/chains/9/18438909/51fbbb10b71a1999349f8801cad928e4.png?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
              alt="Hotel image"
            />
          </div>
          <div className="hotel-name">
            <h1>La Pino'z Pizza</h1>
            <p>
              Quick Bites - Pizza, Fast Food, Italian, Beverages Ellis Bridge
            </p>
            <p>
              <span className="text-primary"> Open at 11 a.m - </span>
              <span className="text-danger">Close at 11 p.m</span>{" "}
            </p>
          </div>
          <div className="food-category">
            <h3 className="food-category-title">Best in Pizza</h3>
            <ul>
              <li className="food-item">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12 col-md-4">
                      <img
                        src="https://b.zmtcdn.com/data/dish_photos/1af/b48763a059863d8185113132a3e1a1af.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*"
                        alt="Food Image"
                      />
                    </div>
                    <div className="col-sm-12 col-md-8 food-details">
                      <div className="food-item-title">
                        <h4>Cheese Lowers Pizza</h4>
                        <p>Price ₹ 205</p>
                        <button type="button" class="btn btn-danger">
                          Add
                        </button>
                      </div>
                      <div className="food-item-description">
                        Hot and garlic dip, jalapenos, mushrooms, olives and
                        capsicum.
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="food-item">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12 col-md-4">
                      <img
                        src="https://b.zmtcdn.com/data/dish_photos/1af/b48763a059863d8185113132a3e1a1af.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*"
                        alt="Food Image"
                      />
                    </div>
                    <div className="col-sm-12 col-md-8 food-details">
                      <div className="food-item-title">
                        <h4>Cheese Lowers Pizza</h4>
                        <p>Price ₹ 205</p>
                        <button type="button" class="btn btn-danger">
                          Add
                        </button>
                      </div>
                      <div className="food-item-description">
                        Hot and garlic dip, jalapenos, mushrooms, olives and
                        capsicum.
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="food-item">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12 col-md-4">
                      <img
                        src="https://b.zmtcdn.com/data/dish_photos/1af/b48763a059863d8185113132a3e1a1af.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*"
                        alt="Food Image"
                      />
                    </div>
                    <div className="col-sm-12 col-md-8 food-details">
                      <div className="food-item-title">
                        <h4>Cheese Lowers Pizza</h4>
                        <p>Price ₹ 205</p>
                        <button type="button" class="btn btn-danger">
                          Add
                        </button>
                      </div>
                      <div className="food-item-description">
                        Hot and garlic dip, jalapenos, mushrooms, olives and
                        capsicum.
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="food-item">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12 col-md-4">
                      <img
                        src="https://b.zmtcdn.com/data/dish_photos/1af/b48763a059863d8185113132a3e1a1af.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*"
                        alt="Food Image"
                      />
                    </div>
                    <div className="col-sm-12 col-md-8 food-details">
                      <div className="food-item-title">
                        <h4>Cheese Lowers Pizza</h4>
                        <p>Price ₹ 205</p>
                        <button type="button" class="btn btn-danger">
                          Add
                        </button>
                      </div>
                      <div className="food-item-description">
                        Hot and garlic dip, jalapenos, mushrooms, olives and
                        capsicum.
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Hotel;
