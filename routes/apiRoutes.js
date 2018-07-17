const apiRoutes = require('express').Router();
const leagueRoutes = require('./leagueRoutes');
const userRoutes = require('./userRoutes');
const characterRoutes = require('./characterRoutes');
const actionRoutes = require('./actionRoutes');
const actionTypeRoutes = require('./actionTypeRoutes');
const authRoutes = require('./authRoutes');

apiRoutes.use('/leagues', leagueRoutes);
apiRoutes.use('/users', userRoutes);
apiRoutes.use('/characters', characterRoutes);
apiRoutes.use('/actions', actionRoutes);
apiRoutes.use('/action_types', actionTypeRoutes);
apiRoutes.use('/auth', authRoutes);

module.exports = apiRoutes;