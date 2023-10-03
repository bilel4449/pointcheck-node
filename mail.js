var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bilelhaj03@gmail.com',
    pass: '123456bb@@'
  }
});
var mailOptions = {
    from: 'bilelhaj03@gmail.com',
    to: 'bileltrain44@gmail.com',
    subject: 'Sending Email using Node.js',
    html: '<h1>bienvennue</h1><p>That was easy!</p>'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });