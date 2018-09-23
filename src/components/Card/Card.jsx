import React from "react";
import "./Card.css";

const Card = ({ image, name, id, handleClick }) => (
  <div className="card">
    <div className="img-container" value={id}>
      <img src={image} alt={name} onClick={() => handleClick(id)} />
    </div>
    <div className="content">
      <p>
        <strong>{name}</strong>
      </p>
    </div>
  </div>
);

export default Card;
