import React from "react";

const DestinationCard = ({ destination }) => (
  <article className="card">
    <img src={destination.image} alt={destination.name} />
    <div className="card-body">
      <div className="card-header">
        <h3>{destination.name}</h3>
        <span className="price">${destination.price}</span>
      </div>
      <p>{destination.description}</p>
      <div className="card-tags">
        <span>{destination.duration}</span>
        <span>{destination.type}</span>
      </div>
    </div>
  </article>
);

export default DestinationCard;
