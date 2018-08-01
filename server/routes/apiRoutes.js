const apiRoutes = require('express').Router();
const characterRoutes = require('./characterRoutes');
const actionRoutes = require('./actionRoutes');
const actionTypeRoutes = require('./actionTypeRoutes');
const userRoutes = require('./userRoutes');
const { authenticate } = require('../middlewares');


apiRoutes.use(authenticate);

userRoutes(apiRoutes);
characterRoutes(apiRoutes);
actionTypeRoutes(apiRoutes);
actionRoutes(apiRoutes);

module.exports = apiRoutes;