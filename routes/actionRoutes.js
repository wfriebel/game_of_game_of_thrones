const { Action } = require('../models/Action');
require('../models/ActionType');

module.exports = (app) => {
    app.get('/leagues/:leagueId/actions', (req, res) => {
        Action.find({ league: req.params.leagueId })
            .then(actions => {
                actions
                    ? res.send(actions)
                    : res.status(404).send();
            })
            .catch(e => {
                res.status(400).send({ error: e });
            });
    });

    app.get('/leagues/:leagueId/users/:userId/actions', (req, res) => {
        Action.find({
                league: req.params.leagueId,
                user: req.params.userId
            })
            .then(actions => {
                actions
                    ? res.send(actions)
                    : res.status(404).send();
            })
            .catch(e => {
                res.status(400).send({ error: e });
            })
    });

    app.get('/leagues/:leagueId/characters/:characterId/actions', (req, res) => {
        Action.find({
            league: req.params.leagueId,
            character: req.params.characterId
        })
        .then(actions => {
            actions
                ? res.send(actions)
                : res.status(404).send();
        })
        .catch(e => {
            res.status(400).send({ error: e });
        })
    })
};
