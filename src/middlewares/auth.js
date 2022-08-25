require('dotenv/config');
const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET || '2c85c7d5da3941bffefd6920fa029112';

const createToken = (payload) => {
  const options = {
    algorithm: 'HS256',
    expiresIn: '12h',
  };

  const token = jwt.sign(payload, secretKey, options);
  return token;
};

const validateToken = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const user = jwt.verify(token, secretKey);
    req.user = user;
    return next();
  } catch (_error) {
    return res.status(401).json({ message: 'expired or invalid token' });
  }
};

module.exports = {
  createToken,
  validateToken,
};
