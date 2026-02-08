const express = require("express");
const { body, validationResult } = require("express-validator");
const Package = require("../models/Package");
const { authMiddleware, adminOnly } = require("../middleware/auth");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const { search, category, maxPrice } = req.query;
    const query = {};

    if (search) {
      query.title = { $regex: search, $options: "i" };
    }
    if (category) {
      query.category = category;
    }
    if (maxPrice) {
      query.price = { $lte: Number(maxPrice) };
    }

    const packages = await Package.find(query);
    return res.json(packages);
  } catch (error) {
    return next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const travelPackage = await Package.findById(req.params.id);
    if (!travelPackage) {
      return res.status(404).json({ message: "Package not found" });
    }
    return res.json(travelPackage);
  } catch (error) {
    return next(error);
  }
});

router.post(
  "/",
  authMiddleware,
  adminOnly,
  [
    body("title").notEmpty(),
    body("description").notEmpty(),
    body("price").isNumeric(),
    body("category").notEmpty(),
    body("duration").notEmpty(),
    body("image").isURL(),
  ],
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: "Validation error", errors: errors.array() });
      }
      const travelPackage = await Package.create(req.body);
      return res.status(201).json(travelPackage);
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
      const travelPackage = await Package.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!travelPackage) {
        return res.status(404).json({ message: "Package not found" });
      }
      return res.json(travelPackage);
    } catch (error) {
      return next(error);
    }
  }
);

router.delete("/:id", authMiddleware, adminOnly, async (req, res, next) => {
  try {
    const travelPackage = await Package.findByIdAndDelete(req.params.id);
    if (!travelPackage) {
      return res.status(404).json({ message: "Package not found" });
    }
    return res.json({ message: "Package deleted" });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
