const { League } = require('../models/League');

module.exports = (app) => {
    app.get('/leagues/:leagueId', (req, res) => {
        League.findById(req.params.leagueId)
            .then(league => {
                res.send(league);
            });
    });
};