// import {
//   ADD_FRIEND_START,
//   ADD_FRIEND_SUCCESS,
//   ADD_FRIEND_ERROR
// } from "../actions";

// const initialState = {
//   friends: [],
//   fetching: false,
//   errors: null
// };

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_FRIEND_START:
//       return {
//         ...state,
//         fetching: true,
//         errors: null
//       };

//     case ADD_FRIEND_SUCCESS:
//       return {
//         ...state,
//         fetching: false,
//         errors: null,
//         friends: action.payload
//       };
//     case ADD_FRIEND_ERROR:
//       return {
//         ...state,
//         fetching: false,
//         errors: action.payload
//       };
//     default:
//       return state;
//   }
// };
