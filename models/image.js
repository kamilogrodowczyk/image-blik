const mongoose = require("mongoose");

const imageSchema = mongoose.Schema({
  randomPassword: String,
  photoUrl: String,
  expire_at: { type: Date, default: Date.now, expires: 10 },
});

const Image = mongoose.model("Image", imageSchema);
module.exports = Image;
