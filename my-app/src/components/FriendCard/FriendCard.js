import React from "react";
import "./FriendCard.css";

const FriendCard = props => ( 
    <div className="img-container" onClick={() => props.ifClicked(props.id)}>
      <img alt={props.name} src={props.image} />
    </div>
);

export default FriendCard;
