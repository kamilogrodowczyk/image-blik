const Vonage = require("@vonage/server-sdk");

const vonage = new Vonage({
  apiKey: process.env.VONAGE_API_KEY,
  apiSecret: process.env.VONAGE_API_SECRET,
});

exports.sendMessage = (req, res) => {
  const textMessage = `ImagesToDownload: ${req.body.random_password}. Valid for 5 minutes`;
  for (let i = 0; i < req.body.phone.length; i++) {
    vonage.message.sendSms(
      "ImagesToDownload",
      req.body.phone[i],
      textMessage,
      { type: "unicode" },
      (err, responseData) => {
        if (
          responseData === undefined ||
          responseData.messages[0]["status"] === "0"
        ) {
          console.dir(responseData);
        } else {
          console.log(
            `Message failed with error: ${responseData.messages[0]["error-text"]}`,
          );
          return res.status(500).json({ success: false, message: err });
        }
      },
    );
  }
  res.redirect("/login");
};