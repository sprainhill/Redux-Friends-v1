import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../actions";

class Login extends Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChanges = event => {
    this.setState({
      credential: {
        ...this.state.credentials,
        [event.target.name]: event.target.value
      }
    });
  };

  login = event => {
    event.preventDefault();
    this.props.login(this.state.credentials).then(() => {
      this.props.history.push("/FriendsViewContainer");
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={this.state.credentials.username}
            onChange={this.handleChanges}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.credentials.username}
            onChange={this.handleChanges}
          />
          <button>Log In</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { login }
)(Login);
