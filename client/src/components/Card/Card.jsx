import React from "react";
import { Link } from "react-router-dom";
import './card.css';

export const Card = ({ name , image , id}) => {
  return (
    <div className="contCards">
      <div  className="card">
        <Link to={`/detail/${id}`}>
          <h3 className="title-card">{name}</h3>
          <img src={image} alt='Not found' className="img"/>
        </Link>
      </div>
    </div>
  )
};
