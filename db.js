const mongoose = require("mongoose");

module.exports = async function connection() {
  try {
    const config = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    await mongoose.connect(
      "mongodb+srv://image-blik:image-blik@cluster0.1tuko.mongodb.net/image-blik",
      config,
    );
    console.log("MongoDB connected ...");
  } catch (e) {
    console.log(e);
  }
};
