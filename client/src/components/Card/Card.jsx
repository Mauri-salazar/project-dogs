import React from "react";
import { Link } from "react-router-dom";
import './card.css';

export const Card = ({ name , image , id}) => {
  return (
    <div className="contCards">
      <div  className="card">
        <Link to={`/detail/${id}`}>
          <p>{name}</p>
          <img src={image} alt='Not found' className="img"/>
        </Link>
      </div>
    </div>
  )
};
