require('dotenv/config');
const nodemailer = require('nodemailer');

module.exports = async (email, firstName) => {
  const testAccount = await nodemailer.createTestAccount();
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASSWORD,
      },
      ...(process.env.NODE_ENV === 'development' && {
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      }),
    });

    const xablau = await transporter.sendMail({
      from: `'The Wall App Team' ${
        process.env.NODEMAILER_EMAIL || 'app@wall.com'
      }`,
      to: email,
      subject: 'Welcome to The Wall App',
      text: `Hi ${firstName} 👋
      Welcome to The Wall App! 🎉`,
    });
    console.log(xablau)
  } catch (error) {
    throw error;
  }
};
