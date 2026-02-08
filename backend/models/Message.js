const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    message: { type: String, required: true },
    status: { type: String, default: "new", enum: ["new", "reviewed"] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", messageSchema);
