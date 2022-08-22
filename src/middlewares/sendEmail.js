require('dotenv/config');
const nodemailer = require('nodemailer');

module.exports = async (email, firstName) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `'The Wall App Team' ${process.env.NODEMAILER_EMAIL || 'app@wall.com'}`,
      to: email,
      subject: 'Welcome to The Wall App',
      text: `Hi ${firstName} 👋
      Welcome to The Wall App! 🎉`
    });
  } catch (error) {
    throw error;
  }
};
