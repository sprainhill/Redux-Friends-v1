import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute";
import FriendViewContainer from "./views/FriendViewContainer";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <ul className="links">
          <li>
            <Link to="/login">Log In</Link>
          </li>
          <li>
            <Link to="/FriendViewContainer">Friends List</Link>
          </li>
        </ul>
        <div className="App">
          <h2>Rory's Imaginary Friends</h2>
          <Route path="/login" component={Login} />
          <PrivateRoute
            exact
            path="/FriendViewContainer"
            component={FriendViewContainer}
          />
        </div>
      </div>
    </Router>
  );
}

export default App;
