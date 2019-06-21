import React, { Component } from "react";
import { connect } from "react-redux";
import { addFriend } from "../actions/index";

class FriendForm extends Component {
  state = {
    name: "",
    age: "",
    email: ""
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addFriend} className="friend-form">
          <input
            type="text"
            placeholder="friend name"
            name="name"
            value={this.state.name}
            onChange={this.handleChanges}
          />
          <input
            type="text"
            placeholder="friend age"
            name="age"
            value={this.state.age}
            onChange={this.handleChanges}
          />
          <input
            type="text"
            placeholder="friend email"
            name="email"
            value={this.state.email}
            onChange={this.handleChanges}
          />
          <button className="btn">Add Friend</button>
        </form>
      </div>
    );
  }
  handleChanges = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addFriend = event => {
    event.preventDefault();
    const newFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };
    this.props.addFriend(newFriend);
  };
}

export default connect(
  null,
  { addFriend }
)(FriendForm);
