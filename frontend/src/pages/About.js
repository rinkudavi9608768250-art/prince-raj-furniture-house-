import React from "react";

const About = () => (
  <div className="page">
    <section className="page-header">
      <h1>About Us</h1>
      <p>We design curated travel experiences that feel effortless and personal.</p>
    </section>
    <section className="section">
      <div className="value-grid">
        <div>
          <h3>Mission</h3>
          <p>To help travelers discover new perspectives through safe and joyful journeys.</p>
        </div>
        <div>
          <h3>Vision</h3>
          <p>Become the most trusted travel companion for families and explorers worldwide.</p>
        </div>
        <div>
          <h3>Values</h3>
          <p>Transparency, sustainability, and exceptional customer care.</p>
        </div>
      </div>
    </section>
    <section className="section muted">
      <h2>Why travelers choose us</h2>
      <ul className="checklist">
        <li>Dedicated travel concierge for every booking.</li>
        <li>Tailored itineraries based on budget and travel style.</li>
        <li>Safety-vetted partners and curated accommodations.</li>
      </ul>
    </section>
  </div>
);

export default About;
