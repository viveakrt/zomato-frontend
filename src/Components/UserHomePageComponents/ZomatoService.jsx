import React, { Component } from "react";

export class ZomatoService extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="zomato-service ">
          <div class="container">
            <div class="row">
              <div class="col-sm">
                <div class="card card-1">
                  <img
                    class="card-img-top"
                    src="https://b.zmtcdn.com/webFrontend/64dffaa58ffa55a377cdf42b6a690e721585809275.png?fit=around|402:360&crop=402:360;*,*"
                    alt="Food item"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Order Food Online</h5>
                    <p class="card-text">
                      Stay home and order to your doorstep
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm">
                <div class="card card-2">
                  <img
                    class="card-img-top"
                    src="https://b.zmtcdn.com/webFrontend/95f005332f5b9e71b9406828b63335331585809309.png?fit=around|402:360&crop=402:360;*,*"
                    alt="Food item"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Go out for a meal</h5>
                    <p class="card-text">
                      View the city's favorite dining venues
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm">
                <div class="card card-3">
                  <img
                    class="card-img-top"
                    src="https://b.zmtcdn.com/webFrontend/b256d0dd8a29f9e0623ecaaea910534d1585809352.png?fit=around|402:360&crop=402:360;*,*"
                    alt="Food item"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Zomato Pro</h5>
                    <p class="card-text">Enjoy limitless dining privileges</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ZomatoService;
