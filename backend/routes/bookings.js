const express = require("express");
const { body, validationResult } = require("express-validator");
const Booking = require("../models/Booking");
const { authMiddleware, adminOnly } = require("../middleware/auth");

const router = express.Router();

router.get("/", authMiddleware, adminOnly, async (req, res, next) => {
  try {
    const bookings = await Booking.find();
    return res.json(bookings);
  } catch (error) {
    return next(error);
  }
});

router.get("/:id", authMiddleware, adminOnly, async (req, res, next) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    return res.json(booking);
  } catch (error) {
    return next(error);
  }
});

router.post(
  "/",
  [
    body("travelerName").notEmpty(),
    body("email").isEmail(),
    body("phone").notEmpty(),
    body("destination").notEmpty(),
    body("travelers").isInt({ min: 1 }),
    body("date").notEmpty(),
  ],
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: "Validation error", errors: errors.array() });
      }
      const booking = await Booking.create(req.body);
      return res.status(201).json(booking);
    } catch (error) {
      return next(error);
    }
  }
);

router.put("/:id", authMiddleware, adminOnly, async (req, res, next) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    return res.json(booking);
  } catch (error) {
    return next(error);
  }
});

router.delete("/:id", authMiddleware, adminOnly, async (req, res, next) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    return res.json({ message: "Booking deleted" });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
