const nodemailer = require('nodemailer');
require('dotenv').config();

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.Email_User,
      pass: process.env.Email_Pass
    }
  });

transporter.sendMail({
    to: process.env.Email_User,
    subject: "did it work?",
    text: "worked?"
}).then( () => {  
    console.log("It worked !!!");
}).catch( (err) => {
    console.error(err)
});
