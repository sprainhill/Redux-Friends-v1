import { LOGIN_START, LOGIN_ERROR, LOGIN_SUCCESS } from "../actions/index";

const initialState = {
  friends: [],
  fetching: false,
  errors: null,
  loggingIn: false,
  authenticated: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        errors: null,
        fetching: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        errors: null,
        fetching: false,
        authenticated: true
      };
    case LOGIN_ERROR:
      return {
        ...state,
        errors: action.payload,
        fetching: false
      };
    default:
      return state;
  }
};
