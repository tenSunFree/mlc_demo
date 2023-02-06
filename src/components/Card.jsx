import React from "react";
import { Link } from "react-router-dom";
import "../css/card.scss";

function Card({ image, title, description, key, id }) {
  console.log(id);
  return (
    <Link to={`/card/${id}`} className="card" key={key}>
      <img src={image} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <p className="description">{description}</p>
      <button>更多</button>
    </Link>
  );
}

export default Card;
