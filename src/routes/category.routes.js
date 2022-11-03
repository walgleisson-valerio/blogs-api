const express = require('express');
const { categoryController } = require('../controllers');
const authMiddleware = require('../middlewares/auth.middleware');

const routes = express.Router();

routes.get('/', authMiddleware.validateToken, categoryController.getCategories);

module.exports = routes;