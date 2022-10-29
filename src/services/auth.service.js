const { User } = require('../models');
const jwtUtil = require('../utils/jwt.util');

const validateBody = (body) => {
  if (!body || !body.email || !body.password) {
    const err = new Error('Some required fields are missing');
    err.status = 400;
    throw err;
  }

  return body;
};

const validateLogin = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });

  if (!user || user.password !== password) {
    const err = new Error('Invalid fields');
    err.status = 400;
    throw err;
  }

  const { password: _, ...userWithoutPassword } = user.dataValues;

  const token = jwtUtil.createToken(userWithoutPassword);

  return token;
};

module.exports = {
  validateBody,
  validateLogin,
};