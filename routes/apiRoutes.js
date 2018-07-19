const api = require('express').Router();
const characterRoutes = require('./characterRoutes');
const actionRoutes = require('./actionRoutes');
const actionTypeRoutes = require('./actionTypeRoutes');
const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');

api.use('/auth', authRoutes);
userRoutes(api);
characterRoutes(api);
actionTypeRoutes(api);
actionRoutes(api);

module.exports = api;