const express = require('express');
const { authController } = require('../controllers');

const routes = express.Router();

routes.post('/', authController.login);

module.exports = routes;