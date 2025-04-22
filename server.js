const nodemailer = require('nodemailer');
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 10000;


app.get('/', (req, res) => {
  res.send('🚀 Hello from Render + Node!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.Email_User,
      pass: process.env.Email_Pass
    }
  });

