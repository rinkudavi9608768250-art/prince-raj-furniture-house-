import React from "react";

const TestimonialSection = ({ testimonials }) => (
  <section className="testimonials">
    <h2>Traveler Stories</h2>
    <div className="testimonial-grid">
      {testimonials.map((review) => (
        <article key={review.name}>
          <p>"{review.quote}"</p>
          <strong>{review.name}</strong>
          <span>{review.trip}</span>
        </article>
      ))}
    </div>
  </section>
);

export default TestimonialSection;
