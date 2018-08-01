const { Character } = require('../models/Character');
const { CharacterOwner } = require('../models/CharacterOwner');
const characterRoutes = require('express').Router()

characterRoutes.get('/', (req, res) => {
    Character.find()
        .then(characters => {
            res.send({ characters })
        })
        .catch(e => {
            res.status(400).send({ error: e });
        });
});

characterRoutes.get('/:characterId', (req, res) => {
    Character.findById(req.params.characterId)
        .then(character => {
            character
                ? res.send({ character })
                : res.status(404).send(character);
        })
        .catch(e => {
            res.status(400).send();
        });
});

module.exports = characterRoutes