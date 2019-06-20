import React from "react";

const FriendCard = props => {
  return (
    <div className="friend-card">
      <div>{props.friend.name}</div>
    </div>
  );
};

export default FriendCard;
