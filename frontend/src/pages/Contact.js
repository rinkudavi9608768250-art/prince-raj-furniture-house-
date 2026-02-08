import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please complete all required fields.");
      return;
    }
    setStatus("Thanks! Our team will respond within 24 hours.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="page">
      <section className="page-header">
        <h1>Contact Us</h1>
        <p>Tell us about your next adventure or ask any questions.</p>
      </section>
      <div className="contact-grid">
        <form className="form" onSubmit={handleSubmit}>
          <label>
            Name
            <input name="name" value={formData.name} onChange={handleChange} />
          </label>
          <label>
            Email
            <input name="email" value={formData.email} onChange={handleChange} />
          </label>
          <label>
            Message
            <textarea name="message" value={formData.message} onChange={handleChange} />
          </label>
          {status && <p className="status">{status}</p>}
          <button type="submit" className="primary">
            Send Message
          </button>
        </form>
        <div className="contact-info">
          <h3>Connect with us</h3>
          <p>We are available Monday to Saturday, 9 AM - 8 PM.</p>
          <p>Email: support@dreamjourney.com</p>
          <p>Phone: +1 (555) 248-1166</p>
          <p>HQ: 501 Skyline Avenue, New York, NY</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
