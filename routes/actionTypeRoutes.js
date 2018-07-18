const actionTypeRoutes = require('express').Router();
const { ActionType } = require('../models/ActionType');

module.exports = (app) => {
    app.get('/action_types', (req, res) => {
        ActionType.find()
            .then(actionTypes => {
                res.send(actionTypes);
            })
    });
}
