const express = require('express');

const authRouter = require('./auth.routes');

const routers = express.Router();

// public routers
routers.use('/login', authRouter);

module.exports = routers;