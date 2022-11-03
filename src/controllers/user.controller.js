const { userService } = require('../services');

const createUser = async (req, res) => {
  const token = await userService.createUser(req.body);

  res.status(201).json({ token });
};

const getUsers = async (req, res) => {
  const users = await userService.getUsers();

  res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.getUserById(id);

  if (!user) {
    const err = new Error('User does not exist');
    err.status = 404;
    throw err;
  }

  res.status(200).json(user);
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
};