const { User } = require('../models/User');

module.exports = (app) => {
    app.get('/leagues/:leagueId/users', (req, res) => {
        User.find({ league: req.params.leagueId })
            .then(users => {
                users
                    ? res.send(users)
                    : res.status(404).send();
            })
            .catch(e => {
                res.status(400).send({ error: e });
            });
    });

    app.get('/leagues/:leagueId/users/:userId', (req, res) => {
        User.findById(req.params.userId)
            .then(user => {
                user
                    ? res.send(user)
                    : res.status(404).send();
            })
            .catch(e => {
                res.status(400).send({ error: e });
            });
    });
};
