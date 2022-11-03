const jwtUtil = require('../utils/jwt.util');

const validateToken = async (req, _res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    const err = new Error('Token not found');
    err.status = 401;
    throw err;
  }

  const user = jwtUtil.validateToken(authorization);
  req.user = user;

  next();
};

module.exports = { validateToken };