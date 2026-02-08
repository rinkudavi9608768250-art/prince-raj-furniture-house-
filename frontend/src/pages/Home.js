import React from "react";
import { Link } from "react-router-dom";
import DestinationCard from "../components/DestinationCard";
import PackageCard from "../components/PackageCard";
import TestimonialSection from "../components/TestimonialSection";
import { destinations, packages, testimonials } from "../data/sampleData";

const Home = () => (
  <div className="page">
    <section className="hero">
      <div className="hero-content">
        <h1>Dream Journey Travels</h1>
        <p>
          Curated escapes, seamless bookings, and 24/7 travel care to turn every
          journey into a lifelong story.
        </p>
        <div className="hero-actions">
          <Link to="/packages" className="primary">
            Explore Packages
          </Link>
          <Link to="/booking" className="secondary">
            Start Booking
          </Link>
        </div>
        <div className="hero-stats">
          <div>
            <h3>120+</h3>
            <p>Global destinations</p>
          </div>
          <div>
            <h3>4.9/5</h3>
            <p>Traveler satisfaction</p>
          </div>
          <div>
            <h3>24/7</h3>
            <p>Support concierge</p>
          </div>
        </div>
      </div>
      <div className="hero-card">
        <h2>Signature Escape</h2>
        <p>Luxury stay in Santorini with sunset cruise and private chef.</p>
        <div className="hero-card-detail">
          <span>7 Days</span>
          <span>From $2,950</span>
        </div>
        <Link to="/booking" className="primary">
          Reserve Now
        </Link>
      </div>
    </section>

    <section className="section">
      <div className="section-header">
        <h2>Popular Destinations</h2>
        <Link to="/destinations">View all</Link>
      </div>
      <div className="grid">
        {destinations.slice(0, 3).map((destination) => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>
    </section>

    <section className="section muted">
      <div className="section-header">
        <h2>Tailored Packages</h2>
        <Link to="/packages">View all</Link>
      </div>
      <div className="grid">
        {packages.map((travelPackage) => (
          <PackageCard key={travelPackage.id} travelPackage={travelPackage} />
        ))}
      </div>
    </section>

    <section className="section">
      <div className="value-grid">
        <div>
          <h3>Personalized Planning</h3>
          <p>Custom itineraries designed by our destination experts.</p>
        </div>
        <div>
          <h3>Flexible Payments</h3>
          <p>Secure payment gateways with easy installments.</p>
        </div>
        <div>
          <h3>Local Partnerships</h3>
          <p>Handpicked hotels and local guides for authentic travel.</p>
        </div>
      </div>
    </section>

    <TestimonialSection testimonials={testimonials} />
  </div>
);

export default Home;
