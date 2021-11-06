const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  randomPassword: String,
  photoUrl: String,
  expire_at: { type: Date, default: Date.now, expires: 10 },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
