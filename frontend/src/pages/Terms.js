import React from "react";

const Terms = () => (
  <div className="page">
    <section className="page-header">
      <h1>Terms & Conditions</h1>
      <p>Review our travel policies to keep your trip stress-free.</p>
    </section>
    <section className="section">
      <h2>Booking policies</h2>
      <p>
        A booking is confirmed once the deposit is received. Changes are subject to
        supplier availability and may incur additional charges.
      </p>
      <h2>Refunds</h2>
      <p>
        Refunds depend on partner cancellation policies. We guide you through all
        steps and provide alternatives whenever possible.
      </p>
      <h2>Traveler responsibilities</h2>
      <ul className="checklist">
        <li>Ensure passports and visas are valid for travel dates.</li>
        <li>Follow local health and safety guidelines.</li>
        <li>Review and accept travel insurance options.</li>
      </ul>
    </section>
  </div>
);

export default Terms;
