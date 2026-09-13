import nodemailer from 'nodemailer';

// Camelmailer speaks plain SMTP — no SDK needed. Authenticate with an
// SMTP credential of your server: the *credential key* is the password,
// the username can be anything (the server identifies you by the key).
const transporter = nodemailer.createTransport({
  host: process.env.CAMELMAILER_SMTP_HOST, // e.g. mx.your-instance.example
  port: Number(process.env.CAMELMAILER_SMTP_PORT ?? 587), // 587 (STARTTLS) or 25
  secure: false, // STARTTLS is negotiated automatically
  auth: {
    user: process.env.CAMELMAILER_SMTP_USER ?? 'camelmailer',
    pass: process.env.CAMELMAILER_SMTP_KEY,
  },
});

const info = await transporter.sendMail({
  from: process.env.CAMELMAILER_FROM ?? 'you@yourdomain.com',
  to: process.env.CAMELMAILER_TO ?? 'delivered@example.com',
  subject: 'Hello from Camelmailer over SMTP',
  html: '<strong>It works!</strong>',
});

console.log('Accepted:', info.response);
