require('dotenv/config');
const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET || '2c85c7d5da3941bffefd6920fa029112';

const createToken = (payload) => {
  try {
    const options = {
      algorithm: 'HS256',
      expiresIn: '12h',
    };

    const token = jwt.sign(payload, secretKey, options);
    return token;
  } catch (error) {
    throw error;
  }
};

module.exports = createToken;
