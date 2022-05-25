export default function (req, res) {
  let nodemailer = require("nodemailer");
  
  const mailData = {
    from: "support@kaardesigns.com",
    to: "support@kaardesigns.com",
    subject: `${req.body.name} contacted you from Kaardesigns`,
    text: req.body.description,
    // html: <div>{req.body.message}</div>,
  };
  
  const mailer = nodemailer.createTransport({
    host: "kaardesigns.com",
    port: 465,
    secure: true,
    auth: {
      user: "support@kaardesigns.com",
      pass: "kaardesigns",
    },
  });

  mailer.sendMail(mailData, function (err, info) {
    if (err) {
        console.log(err);
        return res
          .status(200)
          .json({ status: 500, message: "An error occured, please try again shortly." });
      
    } else {
      console.log(info)
      return res.status(200).json({ status: 200, message: 'Email has been sent successfully' });
    }
  });
}
