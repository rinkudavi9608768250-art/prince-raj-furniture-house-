import React from "react";
import { Link, useLocation } from "react-router-dom";

const Confirmation = () => {
  const location = useLocation();
  const booking = location.state?.booking;

  if (!booking) {
    return (
      <div className="page">
        <section className="page-header">
          <h1>No booking found</h1>
          <p>Please submit a booking form to view confirmation details.</p>
        </section>
        <Link to="/booking" className="primary">
          Go to Booking
        </Link>
      </div>
    );
  }

  return (
    <div className="page">
      <section className="page-header">
        <h1>Booking Confirmed</h1>
        <p>We are thrilled to plan your journey. Confirmation details below.</p>
      </section>
      <div className="confirmation-card">
        <h2>Confirmation ID: {booking.confirmationId}</h2>
        <div className="confirmation-grid">
          <div>
            <strong>Name</strong>
            <p>{booking.name}</p>
          </div>
          <div>
            <strong>Email</strong>
            <p>{booking.email}</p>
          </div>
          <div>
            <strong>Phone</strong>
            <p>{booking.phone}</p>
          </div>
          <div>
            <strong>Destination</strong>
            <p>{booking.destination}</p>
          </div>
          <div>
            <strong>Travelers</strong>
            <p>{booking.travelers}</p>
          </div>
          <div>
            <strong>Date</strong>
            <p>{booking.date}</p>
          </div>
          <div>
            <strong>Payment Gateway</strong>
            <p>{booking.payment}</p>
          </div>
        </div>
        <p className="note">A travel expert will contact you within 24 hours.</p>
      </div>
      <Link to="/" className="secondary">
        Return Home
      </Link>
    </div>
  );
};

export default Confirmation;
