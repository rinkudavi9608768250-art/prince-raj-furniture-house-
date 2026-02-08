import React from "react";

const Privacy = () => (
  <div className="page">
    <section className="page-header">
      <h1>Privacy Policy</h1>
      <p>Your privacy matters. We protect your data and travel details.</p>
    </section>
    <section className="section">
      <h2>What we collect</h2>
      <p>
        We collect contact details, booking preferences, and payment selections to
        coordinate your travel plans. Sensitive payment data is processed securely
        through trusted gateways.
      </p>
      <h2>How we use data</h2>
      <ul className="checklist">
        <li>Confirm bookings and share travel documents.</li>
        <li>Personalize recommendations and offers.</li>
        <li>Meet regulatory and safety requirements.</li>
      </ul>
      <h2>Your choices</h2>
      <p>
        You can request updates, deletions, or export of your personal data anytime
        by emailing privacy@dreamjourney.com.
      </p>
    </section>
  </div>
);

export default Privacy;
