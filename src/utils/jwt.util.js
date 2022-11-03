require('dotenv/config');
const jwt = require('jsonwebtoken');

const createToken = (data) => {
  const token = jwt.sign({ data }, process.env.JWT_SECRET, {
    expiresIn: '1d',
    algorithm: 'HS256',
  });

  return token;
};

const validateToken = (token) => {
  try {
    const { data } = jwt.verify(token, process.env.JWT_SECRET);

    return data;
  } catch (e) {
    const err = new Error('Expired or invalid token');
    err.status = 401;

    throw err;
  } 
};

module.exports = {
  createToken,
  validateToken,
};