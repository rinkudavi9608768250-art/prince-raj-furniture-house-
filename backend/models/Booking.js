const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    travelerName: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    phone: { type: String, required: true },
    destination: { type: String, required: true },
    travelers: { type: Number, required: true, min: 1 },
    date: { type: Date, required: true },
    notes: { type: String, default: "" },
    paymentGateway: { type: String, enum: ["stripe", "razorpay"], default: "stripe" },
    status: { type: String, default: "pending", enum: ["pending", "confirmed", "cancelled"] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", bookingSchema);
