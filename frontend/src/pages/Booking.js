import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  destination: "",
  travelers: "1",
  date: "",
  notes: "",
  payment: "stripe",
};

const Booking = () => {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!formData.name.trim()) nextErrors.name = "Name is required";
    if (!formData.email.includes("@")) nextErrors.email = "Valid email is required";
    if (formData.phone.trim().length < 8) nextErrors.phone = "Phone number is required";
    if (!formData.destination.trim()) nextErrors.destination = "Destination is required";
    if (!formData.date) nextErrors.date = "Travel date is required";
    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      navigate("/confirmation", {
        state: { booking: { ...formData, confirmationId: `DJT-${Date.now()}` } },
      });
      setFormData(initialForm);
    }
  };

  return (
    <div className="page">
      <section className="page-header">
        <h1>Booking</h1>
        <p>Secure your dream journey in minutes. We confirm within 24 hours.</p>
      </section>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <label>
            Full name
            <input name="name" value={formData.name} onChange={handleChange} />
            {errors.name && <span className="error">{errors.name}</span>}
          </label>
          <label>
            Email
            <input name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <span className="error">{errors.email}</span>}
          </label>
          <label>
            Phone
            <input name="phone" value={formData.phone} onChange={handleChange} />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </label>
          <label>
            Destination or package
            <input
              name="destination"
              value={formData.destination}
              onChange={handleChange}
            />
            {errors.destination && <span className="error">{errors.destination}</span>}
          </label>
          <label>
            Travelers
            <select name="travelers" value={formData.travelers} onChange={handleChange}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5+</option>
            </select>
          </label>
          <label>
            Travel date
            <input type="date" name="date" value={formData.date} onChange={handleChange} />
            {errors.date && <span className="error">{errors.date}</span>}
          </label>
        </div>
        <label>
          Notes
          <textarea name="notes" value={formData.notes} onChange={handleChange} />
        </label>
        <div className="payment">
          <h3>Payment Gateway</h3>
          <p>Select a placeholder gateway. Integration keys go in the backend .env file.</p>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="payment"
                value="stripe"
                checked={formData.payment === "stripe"}
                onChange={handleChange}
              />
              Stripe
            </label>
            <label>
              <input
                type="radio"
                name="payment"
                value="razorpay"
                checked={formData.payment === "razorpay"}
                onChange={handleChange}
              />
              Razorpay
            </label>
          </div>
        </div>
        <button type="submit" className="primary">
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default Booking;
