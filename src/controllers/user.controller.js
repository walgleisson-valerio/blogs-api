const { userService } = require('../services');

const createUser = async (req, res) => {
  const token = await userService.createUser(req.body);

  res.status(201).json({ token });
};

const getUsers = async (req, res) => {
  const users = await userService.getUsers();

  res.status(200).json(users);
};

module.exports = {
  createUser,
  getUsers,
};