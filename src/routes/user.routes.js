const express = require('express');
const { userController } = require('../controllers');
const userMiddleware = require('../middlewares/validations/validateUser.middleware');

const routes = express.Router();

routes.post('/', userMiddleware.validateBody, userController.createUser);

module.exports = routes;