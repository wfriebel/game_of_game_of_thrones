const leagueRoutes = require('express').Router();

leagueRoutes.get('/', (req, res) => {
    res.send('GET /leagues')
});

module.exports = leagueRoutes;