import { combineReducers } from "redux";

import authReducer from "./authReducer";
import friendsReducer from "./friendsReducer";

export default combineReducers({
  user: authReducer,
  friends: friendsReducer
});
