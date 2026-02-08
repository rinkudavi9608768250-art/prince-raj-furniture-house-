const express = require("express");
const User = require("../models/User");
const { authMiddleware, adminOnly } = require("../middleware/auth");

const router = express.Router();

router.get("/me", authMiddleware, async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.json(user);
  } catch (error) {
    return next(error);
  }
});

router.get("/", authMiddleware, adminOnly, async (req, res, next) => {
  try {
    const users = await User.find().select("-password");
    return res.json(users);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
