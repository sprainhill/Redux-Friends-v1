import axios from "axios";
export const FETCH_FRIENDS_START = "FETCH_FRIENDS_START";
export const FETCH_FRIENDS_SUCCESS = "FETCH_FRIENDS_SUCCESS";
export const FETCH_FRIENDS_ERROR = "FETCH_FRIENDS_ERROR";
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post("http://localhost:5000/api/login", creds)
    .then(response => {
      console.log("login response", response);
      localStorage.setItem("token", response.data.payload);
      dispatch({ type: LOGIN_SUCCESS, payload: response.data.payload });
    })
    .catch(error => {
      console.log("error response", error.response);
      dispatch({
        type: LOGIN_ERROR,
        payload: error.response.data.error
      });
    });
};

// export const getAuth = () => {
//   axios
//     .get("http://localhost:5000/api/friends", {
//       headers: { Authorization: localStorage.getItem("token") }
//     })
//     .then(response => {});
// };

export const getFriends = () => dispatch => {
  dispatch({ type: FETCH_FRIENDS_START });
  axios
    .get("http://localhost:5000/api/friends", {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(response => {
      console.log("getFriends response.data", response.data);
      dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: response.data });
    })
    .catch(error => {
      console.log("getFriends error", error);
      dispatch({
        type: FETCH_FRIENDS_ERROR,
        payload: error.response.data.error
      });
    });
};
