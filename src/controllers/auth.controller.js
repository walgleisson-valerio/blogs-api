const { authService } = require('../services');

const login = async (req, res) => {
  console.log('============');
  console.log(req.body);
  console.log('============');
  const { email, password } = authService.validateBody(req.body);

  const token = await authService.validateLogin({ email, password });

  res.status(200).json({ token });
};

module.exports = {
  login,
};