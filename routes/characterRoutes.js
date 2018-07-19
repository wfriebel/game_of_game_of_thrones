const { Character } = require('../models/Character');
const { CharacterOwner } = require('../models/CharacterOwner');

module.exports = (app) => {
    app.get('/characters', (req, res) => {
        Character.find()
            .then(characters => {
                characters
                    ? res.send(characters)
                    : res.status(404).send();
            })
            .catch(e => {
                res.status(400).send({ error: e });
            });
    });

    app.get('/characters/:characterId', (req, res) => {
        Character.findById(req.params.characterId)
            .then(character => {
                character
                    ? res.send(character)
                    : res.status(404).send(character);
            })
            .catch(e => {
                res.status(400).send();
            });
    });
    
    app.get('/leagues/:leagueId/users/:userId/characters', (req, res) => {
       CharacterOwner.find({
           owner: req.params.userId,
           league: req.params.leagueId
       })
       .then(result => {
            result
                ? res.send(result.map(item => item.character))
                : res.status(404).send();
       })
       .catch(e => {
           res.status(400).send({ error: e });
       })
    });
};
