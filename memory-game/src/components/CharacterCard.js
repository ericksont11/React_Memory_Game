import React from "react";
import './style.css';

function CharacterCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img
          alt="Character Card"
          src={props.image}
        />
      </div>
    </div>
  );
}

export default CharacterCard;
