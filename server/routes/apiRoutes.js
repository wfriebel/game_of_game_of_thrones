const apiRoutes = require('express').Router();
const characterRoutes = require('./characterRoutes');
const actionRoutes = require('./actionRoutes');
const actionTypeRoutes = require('./actionTypeRoutes');
const userRoutes = require('./userRoutes');
const leagueRoutes = require('./leagueRoutes')

apiRoutes.use('/users', userRoutes)
apiRoutes.use('/characters', characterRoutes)
apiRoutes.use('/leagues', leagueRoutes)
apiRoutes.use('/actions', actionRoutes)
apiRoutes.use('/action-types', actionTypeRoutes)

module.exports = apiRoutes;