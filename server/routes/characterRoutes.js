const { Character } = require('../models/Character');
const { CharacterOwner } = require('../models/CharacterOwner');

module.exports = (app) => {
    app.get('/characters', (req, res) => {
        Character.find()
            .then(characters => {
                characters.length > 0
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
       .then(characterOwners => {
            characterOwners.length > 0
                ? res.send(characterOwners.map(item => item.character))
                : res.status(404).send();
       })
       .catch(e => {
           res.status(400).send({ error: e });
       })
    });
};
