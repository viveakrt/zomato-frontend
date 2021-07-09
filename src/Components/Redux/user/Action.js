import { USER_LOGIN } from "./ActionType";
import { USER_LOGOUT } from "./ActionType";
import { SELECT_CITY } from "./ActionType";

export const userLogin = () => {
  return {
    type: USER_LOGIN,
  };
};

export const userLogout = () => {
  return {
    type: USER_LOGOUT,
  };
};

export const selectCity = (city) => {
  return {
    type: SELECT_CITY,
    payload: city,
  };
};
