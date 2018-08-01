const actionTypeRoutes = require('express').Router();
const { ActionType } = require('../models/ActionType');

actionTypeRoutes.get('/', (req, res) => {
    ActionType.find()
        .then(actionTypes => {
            actionTypes.length > 0
                ? res.send({ actionTypes })
                : res.status(404).send();
        })
        .catch(e => {
            res.status(400).send();
        })
});

module.exports = actionTypeRoutes