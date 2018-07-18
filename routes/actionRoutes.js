const { Action } = require('../models/Action');

module.exports = (app) => {
    app.get('/leagues/:leagueId/actions', (req, res) => {
        Action
            .find({ league: req.params.leagueId })
            .then(actions => {
                res.send(actions);
            })
            .catch(() => {
                res.send({ error: 'there are no actions associated with this league' });
            });
    });

    app.get('/leagues/:leagueId/users/:userId/actions', (req, res) => {
        Action
            .find({
                league: req.params.leagueId,
                user: req.params.userId
            })
            .then(actions => {
                res.send(actions);
            })
            .catch(() => {
                res.send({ error: 'there are no actions associated with this user in this league' });
            })
    });
};
