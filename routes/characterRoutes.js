const { Character } = require('../models/Character');

module.exports = (app) => {
    app.get('/characters', (req, res) => {
        Character.find()
            .then(characters => {
                res.send(characters);
            })
    });
    
    app.get('/users/:userId/characters', (req, res) => {
        Character.find({ user: req.params.userId })
            .then(characters => {
                res.send(characters);
            })
            .catch(() => {
                res.send({ error: `no characters found associated with this user` })
            })
    })
}
