const mongoose = require("mongoose");

const imageSchema = mongoose.Schema({
  randomPassword: String,
  photoUrl: String,
  expire_at: { type: Date, default: Date.now, expireAfterSeconds: 60 },
});

const Image = mongoose.model("Image", imageSchema);
module.exports = Image;
