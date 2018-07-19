const actionTypeRoutes = require('express').Router();
const { ActionType } = require('../models/ActionType');

module.exports = (app) => {
    app.get('/action_types', (req, res) => {
        ActionType.find()
            .then(actionTypes => {
                actionTypes
                    ? res.send(actionTypes)
                    : res.status(404).send();
            })
            .catch(e => {
                res.status(400).send();
            })
    });
}
