const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");

const User = require("../models/image");

const s3 = new aws.S3({
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  region: process.env.S3_BUCKET_REGION,
});

const upload = (bucketName) =>
  multer({
    storage: multerS3({
      s3,
      bucket: bucketName,
      metadata: function (req, file, cb) {
        cb(null, { fieldName: file.fieldname });
      },
      key: function (req, file, cb) {
        cb(null, `image-${Date.now()}.jpeg`);
      },
    }),
  });

exports.setProfilePic = (req, res, next) => {
  const uploadSingle = upload("image-blik-bucket").array("file", 10);

  uploadSingle(req, res, async (err) => {
    if (err) return res.status(400).json({ success: false, message: err });
    let fileArray = req.files;
    let fileLocation;
    const images = [];
    for (let i=0; i < fileArray.length; i++) {
      fileLocation = fileArray[i].location;
      images.push(fileLocation);
      await User.create([{ photoUrl: fileLocation, randomPassword: req.body.random_password }]);
    }

    //res.status(200).json({ data: req.file.location });
    res.redirect("/login");
  });
};
