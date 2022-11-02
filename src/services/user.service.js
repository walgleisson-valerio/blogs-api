const { User } = require('../models');
const jwtUtil = require('../utils/jwt.util');

const createUser = async (newUser) => {
  const user = await User.findOne({ where: { email: newUser.email } });
  if (user) {
    const err = new Error('User already registered');
    err.status = 409;
    throw err;
  }

  await User.create({
    displayName: newUser.displayName,
    email: newUser.email,
    password: newUser.password,
    image: newUser.image,
  });

  const token = jwtUtil.createToken(newUser);

  return token;
};

module.exports = {
  createUser,
};