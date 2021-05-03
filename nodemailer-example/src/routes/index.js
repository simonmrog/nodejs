const { Router } = require("express");
const nodemailer = require("nodemailer");

const router = Router();

router.post("/send-email", async (req, res) => {
  try {
    const { name, email } = req.body;

    content = `
      <h1>User info</h1>
      <ul>
        <li>Username: ${name}</li>
        <li>User email: ${email}</li>
      </ul>
      <p>Please confirm your email below:</p>
      <a href="http://localhost:3000/confirm-email/faketoken">Confirm email</a>
    `;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.TRANSPORT_EMAIL,
        pass: process.env.TRANSPORT_PASSWORD,
      },
    });

    const info = await transporter.sendMail({
      from: `New Email! <${process.env.TRANSPORT_EMAIL}>`,
      to: email,
      subject: "Successfully registered",
      html: content.trim(),
    });

    res.send(`OK: ${info.messageId}`);
  } catch (err) {
    console.log("[ERROR]", err.message);
    res.send(err.message);
  }
});

router.get("/confirm-email/:token", (req, res) => {
  res.send("You've confirmed your email successfully");
});

module.exports = router;
