const { User } = require('../models/User');

// Routes for api/leagues/:leagueId/users

module.exports = (app) => {
    app.get('/leagues/:leagueId/users', (req, res) => {
        User.find({ league: req.params.leagueId })
            .then(users => {
                res.send(users);
            })
    });
}
