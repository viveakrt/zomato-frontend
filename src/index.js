import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./Components/Redux/Store.js";

import "./index.css";
import App from "./App";
import axios from "axios";

axios.defaults.baseURL = "https://zomato-clonee.herokuapp.com";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
