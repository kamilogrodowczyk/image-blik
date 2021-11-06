const router = require("express").Router();
const imageController = require("../controllers/imageController");
const Image = require("../models/image");

router.post("/upload", imageController.setProfilePic);
router.post("/login/auth", async (req, res) => {
  // const image = await Image.findOne({
  //   randomPassword: req.body.text,
  // });

  // if (!image) {
  //   // return res.render("login.ejs", { message: "Bad Authentication" });
  //   return res.status(400).send("Firma o tej nazwie już istnieje.");
  // }
  try {
    // res.redirect("/login");
  } catch (error) {
    return res.status(500).json({ error: "Bad Authentication" });
  }
});
router.get("/image", async (req, res) => {
  try {
    const images = await Image.find({});
    res.render("index.ejs", { image: images });
    // res.redirect(301, "/");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});
router.get("/image-json", async (req, res) => {
  try {
    const images = await Image.find({});
    return res.json(images)
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
