async function sendEmailWithAttachment() {
    try {
      const info = await transporter.sendMail({
        from: 'zhalgasovaida@gmail.com',
        to: 'farizazhalgasova@gmail.com',
        subject: 'Hi',
        text: 'Hello, how are you?',
        attachments: [
          {
            filename: 'sample.txt',
            content: 'This is a sample attachment'
          }
        ]
      });
      console.log('Email sent successfully:', info.response);
    } catch (error) {
      if (error.response) {
        console.error('Error response from server:', error.response);
      } else {
        console.error('General error:', error);
      }
    }
  }
  
  sendEmailWithAttachment();