require('dotenv/config');
const nodemailer = require('nodemailer');

module.exports = async (email, firstName) => {
  let transporter = {};
  const nodemailerCredentialsVerification = process.env.NODEMAILER_EMAIL && process.env.NODEMAILER_PASSWORD;

  if (nodemailerCredentialsVerification) {
    transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASSWORD,
      },
    });
  } else {
    const testAccount = await nodemailer.createTestAccount();
    transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
  }

  await transporter.sendMail({
    from: `'The Wall App Team' ${
      process.env.NODEMAILER_EMAIL || 'app@wall.com'
    }`,
    to: email,
    subject: 'Welcome to The Wall App',
    text: `Hi ${firstName} 👋
      Welcome to The Wall App! 🎉`,
  });
};
