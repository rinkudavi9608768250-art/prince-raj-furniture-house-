import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="footer">
    <div>
      <h3>Dream Journey Travels</h3>
      <p>Get inspired. Travel smart. Return with stories.</p>
      <div className="socials">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
      </div>
    </div>
    <div>
      <h4>Contact</h4>
      <p>support@dreamjourney.com</p>
      <p>+1 (555) 248-1166</p>
      <p>501 Skyline Avenue, New York, NY</p>
    </div>
    <div>
      <h4>Trust & Safety</h4>
      <Link to="/privacy">Privacy Policy</Link>
      <Link to="/terms">Terms & Conditions</Link>
    </div>
  </footer>
);

export default Footer;
