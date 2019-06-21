import {
  FETCH_FRIENDS_START,
  FETCH_FRIENDS_SUCCESS,
  FETCH_FRIENDS_ERROR,
  ADD_FRIEND_START,
  ADD_FRIEND_SUCCESS,
  ADD_FRIEND_ERROR
} from "../actions/index";

const initialState = {
  friends: [],
  fetching: false,
  errors: null,
  addingFriend: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FRIENDS_START:
      return {
        ...state,
        fetching: true,
        errors: null
      };
    case FETCH_FRIENDS_SUCCESS:
      return {
        ...state,
        fetching: false,
        errors: null,
        friends: action.payload
      };
    case FETCH_FRIENDS_ERROR:
      return {
        ...state,
        fetching: false,
        errors: action.payload
      };
    case ADD_FRIEND_START:
      return {
        ...state,
        fetching: true,
        errors: null
      };
    case ADD_FRIEND_SUCCESS:
      return {
        ...state,
        fetching: false,
        errors: null,
        friends: action.payload
      };
    case ADD_FRIEND_ERROR:
      return {
        ...state,
        fetching: false,
        errors: action.payload
      };
    default:
      return state;
  }
};
