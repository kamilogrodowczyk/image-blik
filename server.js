require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const connection = require("./db");
const userRouter = require("./routes/image");
const Image = require("./models/image");
const cors = require("cors");
connection();
app.use(express.json());
app.use(express.urlencoded({ limit: "50mb", extended: true }));

const PORT = process.env.PORT || "5000";

app.set("view engine", "ejs");
app.get("/", async (req, res) => {
  const images = await Image.find({});
  if (!images[0]) {
    res.sendFile(__dirname + "/dist/index.html");
  } else {
    res.redirect("/login");
  }
});

app.get("/login", async (req, res) => {
  const images = await Image.find({});
  if (images[0]) {
    res.render("login.ejs");
  } else {
    res.redirect("/");
  }
});

app.use(express.static(path.join(__dirname, "dist")));
app.use(userRouter);

app.get("/", (req, res) => {
  res.send("<h1>Response is visible</h1>");
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});

app.get("*", function (req, res) {
  res.redirect("/");
});
