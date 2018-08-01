const userRoutes = require('express').Router()

userRoutes.get('/me', (req, res) => {
    res.send({user: req.user })
})

module.exports = userRoutes
