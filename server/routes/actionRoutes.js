const actionRoutes = require('express').Router()
const { Action } = require('../models/Action');

actionRoutes.get('/', (req, res) => {
    Action.find()
        .then(actions => {
            res.send({ actions })
        })
        .catch(e => {
            res.status(400).send({ error: e })
        })
})

module.exports = actionRoutes