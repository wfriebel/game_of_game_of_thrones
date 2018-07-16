const userRoutes = require('express').Router();

userRoutes.get('/', (req, res) => {
    res.send('GET /users')
});

module.exports = userRoutes;