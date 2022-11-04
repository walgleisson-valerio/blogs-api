const express = require('express');
const { blogPostController } = require('../controllers');
const authMiddleware = require('../middlewares/auth.middleware');

const routes = express.Router();

routes.get('/', authMiddleware.validateToken, blogPostController.getBlogPosts);

routes.get('/:id', authMiddleware.validateToken, blogPostController.getBlogPostById);

module.exports = routes;