const router = require("express").Router();
const uploadImages = require("../middleware/uploadImages");
const sendMessage = require("../middleware/sendMessage");
const Image = require("../models/image");

router
  .route("/upload")
  .post(uploadImages.uploadImages, sendMessage.sendMessage);
router.post("/login", async (req, res) => {
  try {
    const image = await Image.findOne({
      randomPassword: req.body.text,
    });

    if (!image) {
    return res.render("login.ejs", { message: 'Bad Authentication' }); 
    }
  } catch (error) {
    return res.render("login.ejs", { message: 'Bad Authentication' });
  }
});
router.get("/image", async (req, res) => {
  try {
    const images = await Image.find({});
    res.render("download.ejs", { image: images });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});
router.get("/image-json", async (req, res) => {
  try {
    const images = await Image.find({});
    return res.json(images);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
