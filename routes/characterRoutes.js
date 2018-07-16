const characterRoutes = require('express').Router();

characterRoutes.get('/', (req, res) => {
    res.send('GET /characters')
});

module.exports = characterRoutes;