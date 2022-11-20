// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
// javascript
import sgMail from '@sendgrid/mail';
import { config } from 'dotenv';
config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');
console.log(process.env.SENDGRID_API_KEY);

const sendMyMail = (to: String, subject: String, content: any) => {
  const msg: any = {
    to: to, // Change to your recipient
    from: 'info@devchuks.com', // Change to your verified sender
    subject: subject,
    // text: "and easy to do anywhere, even with Node.js",
    html: content,
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent');
    })
    .catch((error: any) => {
      console.error(error);
    });
};

export { sendMyMail };
