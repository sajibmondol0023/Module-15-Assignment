// models/userModel.js
// User model (placeholder schema definition)
// Example using Mongoose:
//
// const mongoose = require("mongoose");
//
// const userSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     isAdmin: { type: Boolean, default: false },
//     isBlocked: { type: Boolean, default: false },
//     isVerified: { type: Boolean, default: false },
//     profilePicture: { type: String, default: "" },
//   },
//   { timestamps: true }
// );
//
// module.exports = mongoose.model("User", userSchema);

const userModel = {
  // Placeholder in-memory structure / schema reference
  name: "",
  email: "",
  password: "",
  isAdmin: false,
  isBlocked: false,
  isVerified: false,
  profilePicture: "",
};

module.exports = userModel;
