const express = require("express");
const { body, validationResult } = require("express-validator");
const Message = require("../models/Message");
const { authMiddleware, adminOnly } = require("../middleware/auth");

const router = express.Router();

router.get("/", authMiddleware, adminOnly, async (req, res, next) => {
  try {
    const messages = await Message.find();
    return res.json(messages);
  } catch (error) {
    return next(error);
  }
});

router.post(
  "/",
  [body("name").notEmpty(), body("email").isEmail(), body("message").notEmpty()],
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: "Validation error", errors: errors.array() });
      }
      const message = await Message.create(req.body);
      return res.status(201).json(message);
    } catch (error) {
      return next(error);
    }
  }
);

router.put("/:id", authMiddleware, adminOnly, async (req, res, next) => {
  try {
    const message = await Message.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!message) {
      return res.status(404).json({ message: "Message not found" });
    }
    return res.json(message);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
