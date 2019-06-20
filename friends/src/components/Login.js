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
      credentials: {
        ...this.state.credentials,
        [event.target.name]: event.target.value
      }
    });
  };

  login = event => {
    console.log("login", event);
    event.preventDefault();
    this.props.login(this.state.credentials).then(() => {
      this.props.history.push("/FriendsViewContainer");
    });

    this.setState({
      username: "",
      password: ""
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
            value={this.state.credentials.password}
            onChange={this.handleChanges}
          />
          <button>Log In</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.user.errors,
  fetching: state.user.fetching
});
export default connect(
  mapStateToProps,
  { login }
)(Login);
