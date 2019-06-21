import React, { Component } from "react";
import { connect } from "react-redux";
import { getFriends } from "../actions/";
import FriendCard from "../components/FriendCard";
import FriendForm from "../components/FriendForm";

class FriendViewContainer extends Component {
  componentDidMount() {
    console.log("CDM phasers locked");
    this.props.getFriends();
  }

  handleChanges;

  render() {
    console.log("FVC this.props", this.props);
    return (
      <div>
        <h2>Friends app incoming</h2>
        {this.props.friends.friends.map(friend => {
          console.log("FVC friend", friend);
          return <FriendCard friend={friend} key={friend.id} />;
        })}
        <FriendForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("FVC mapStateToProps state", state);
  return {
    friends: state.friends,
    fetching: state.fetching
  };
};

export default connect(
  mapStateToProps,
  { getFriends }
)(FriendViewContainer);
