const actionRoutes = require('express').Router();

actionRoutes.get('/', (req, res) => {
    res.send('GET /actions')
});

module.exports = actionRoutes;