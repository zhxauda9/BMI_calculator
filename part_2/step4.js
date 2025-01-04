async function sendEmail() {
    try {
      const info = await transporter.sendMail({
        from: 'zhalgasovaida@gmail.com',
        to: 'farizazhalgasova@gmail.com',
        subject: 'Async Test Email',
        text: 'This is an asynchronous email sent using Nodemailer!'
      });
      console.log('Email sent successfully:', info.response);
    } catch (error) {
      console.error('Error while sending email:', error);
    }
  }
  
  sendEmail();