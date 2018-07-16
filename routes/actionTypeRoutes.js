const actionTypeRoutes = require('express').Router();

actionTypeRoutes.get('/', (req, res) => {
    res.send('GET /action_types')
});

module.exports = actionTypeRoutes;