var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bilelbenhajmabrouk@gmail.com',
    pass: 'zqjz jyev wlpd fcue'
  }
});
var mailOptions = {
    from: 'bilelbenhajmabrouk@gmail.com',
    to: 'bileltrain44@gmail.com',
    subject: 'Sending Email using Node.js',
    html:'<button>sending</button>That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });