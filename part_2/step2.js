const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'zhalgasovaida@gmail.com',   
    pass: 'aida0911'     
  }
});

transporter.verify((error, success) => {
  if (error) {
    console.error('Error connecting to mail server:', error);
  } else {
    console.log('Mail server is ready to send messages');
  }
});