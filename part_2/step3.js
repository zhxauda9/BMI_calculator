const mailOptions = {
    from: 'zhalgasovaida@gmail.com',     
    to: 'farizazhalgasova@gmail.com',   
    subject: 'Test Email using Nodemailer',
    text: 'Hello! This is a test email sent using Node.js and Nodemailer.'
  };
  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error while sending email:', error);
    } else {
      console.log('Email sent successfully:', info.response);
    }
  });