import React from "react";

const PackageCard = ({ travelPackage }) => (
  <article className="card">
    <img src={travelPackage.image} alt={travelPackage.title} />
    <div className="card-body">
      <div className="card-header">
        <h3>{travelPackage.title}</h3>
        <span className="price">${travelPackage.price}</span>
      </div>
      <p>{travelPackage.description}</p>
      <ul>
        {travelPackage.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  </article>
);

export default PackageCard;
