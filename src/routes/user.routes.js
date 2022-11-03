const express = require('express');
const { userController } = require('../controllers');
const userMiddleware = require('../middlewares/validations/validateUser.middleware');
const authMiddleware = require('../middlewares/auth.middleware');

const routes = express.Router();

routes.post('/', userMiddleware.validateBody, userController.createUser);

routes.get('/', authMiddleware.validateToken, userController.getUsers);

routes.get('/:id', authMiddleware.validateToken, userController.getUserById);

module.exports = routes;