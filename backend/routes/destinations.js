const express = require("express");
const { body, validationResult } = require("express-validator");
const Destination = require("../models/Destination");
const { authMiddleware, adminOnly } = require("../middleware/auth");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const destinations = await Destination.find();
    return res.json(destinations);
  } catch (error) {
    return next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const destination = await Destination.findById(req.params.id);
    if (!destination) {
      return res.status(404).json({ message: "Destination not found" });
    }
    return res.json(destination);
  } catch (error) {
    return next(error);
  }
});

router.post(
  "/",
  authMiddleware,
  adminOnly,
  [
    body("name").notEmpty(),
    body("description").notEmpty(),
    body("price").isNumeric(),
    body("duration").notEmpty(),
    body("type").notEmpty(),
    body("image").isURL(),
  ],
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: "Validation error", errors: errors.array() });
      }
      const destination = await Destination.create(req.body);
      return res.status(201).json(destination);
    } catch (error) {
      return next(error);
    }
  }
);

router.put(
  "/:id",
  authMiddleware,
  adminOnly,
  async (req, res, next) => {
    try {
      const destination = await Destination.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!destination) {
        return res.status(404).json({ message: "Destination not found" });
      }
      return res.json(destination);
    } catch (error) {
      return next(error);
    }
  }
);

router.delete("/:id", authMiddleware, adminOnly, async (req, res, next) => {
  try {
    const destination = await Destination.findByIdAndDelete(req.params.id);
    if (!destination) {
      return res.status(404).json({ message: "Destination not found" });
    }
    return res.json({ message: "Destination deleted" });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
