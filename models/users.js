const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  token: { type: String, required: false, default: "" },
  needsAuth: { type: Boolean, required: false, default: true }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
