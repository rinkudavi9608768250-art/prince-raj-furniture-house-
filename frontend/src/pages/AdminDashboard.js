import React from "react";
import { packages } from "../data/sampleData";

const AdminDashboard = () => (
  <div className="page">
    <section className="page-header">
      <h1>Admin Dashboard</h1>
      <p>Manage packages, bookings, and travelers from one place.</p>
    </section>

    <section className="section">
      <div className="admin-stats">
        <div>
          <h3>28</h3>
          <p>Active packages</p>
        </div>
        <div>
          <h3>112</h3>
          <p>Bookings this month</p>
        </div>
        <div>
          <h3>16</h3>
          <p>Pending approvals</p>
        </div>
      </div>
    </section>

    <section className="section muted">
      <h2>Package Management</h2>
      <div className="table">
        <div className="table-row table-header">
          <span>Package</span>
          <span>Category</span>
          <span>Price</span>
          <span>Status</span>
        </div>
        {packages.map((travelPackage) => (
          <div key={travelPackage.id} className="table-row">
            <span>{travelPackage.title}</span>
            <span>{travelPackage.category}</span>
            <span>${travelPackage.price}</span>
            <span>Active</span>
          </div>
        ))}
      </div>
      <button type="button" className="primary">
        Add New Package
      </button>
    </section>

    <section className="section">
      <h2>Booking Management</h2>
      <div className="table">
        <div className="table-row table-header">
          <span>Traveler</span>
          <span>Destination</span>
          <span>Date</span>
          <span>Status</span>
        </div>
        <div className="table-row">
          <span>Sophia Chen</span>
          <span>Kyoto, Japan</span>
          <span>Aug 12, 2024</span>
          <span>Confirmed</span>
        </div>
        <div className="table-row">
          <span>Aarav Singh</span>
          <span>Bali, Indonesia</span>
          <span>Sep 02, 2024</span>
          <span>Pending</span>
        </div>
      </div>
    </section>
  </div>
);

export default AdminDashboard;
