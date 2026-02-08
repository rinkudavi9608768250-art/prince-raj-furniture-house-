import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => (
  <header className="navbar">
    <div className="logo">
      <span className="logo-icon">✈️</span>
      <div>
        <p>Dream Journey</p>
        <span>Travels</span>
      </div>
    </div>
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/destinations">Destinations</NavLink>
      <NavLink to="/packages">Packages</NavLink>
      <NavLink to="/booking">Booking</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
    <NavLink to="/admin" className="cta">
      Admin Dashboard
    </NavLink>
  </header>
);

export default NavBar;
