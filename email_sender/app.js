const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Endpoint to handle the email sending process
app.post('/send-email', (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validate the inputs (optional but recommended)
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Please fill in all the fields.' });
  }

  // Nodemailer configuration
  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Email content
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'fidelanders@gmail.com', // Replace with your desired email address
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'An error occurred while sending the email.' });
    } else {
      console.log('Email sent:', info.response);
      return res.status(200).json({ message: 'Email sent successfully!' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
