import { USER_LOGIN } from "./ActionType";
import { USER_LOGOUT } from "./ActionType";
import { SELECT_CITY } from "./ActionType";

let initialState = {
  isUserLogin: false,
  city: "all",
  hotel: [],
};

const userReducer = (state = initialState, action) => {
  try {
    switch (action.type) {
      case USER_LOGIN: {
        return {
          ...state,
          isUserLogin: true,
        };
      }

      case USER_LOGOUT: {
        return {
          ...state,
          isUserLogin: false,
        };
      }

      case SELECT_CITY: {
        console.log(action.payload);
        return {
          ...state,
          city: action.payload,
        };
      }

      default:
        return { ...state };
    }
  } catch (err) {
    console.error(err);
  }
};

export default userReducer;
