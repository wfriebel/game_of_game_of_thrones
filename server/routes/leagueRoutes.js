const leagueRoutes = require('express').Router();
const { CharacterOwner } = require('../models/CharacterOwner');
const { User } = require('../models/User')
const { Action } = require('../models/Action');
const { Character } = require('../models/Character')

leagueRoutes.get('/:leagueId/actions', (req, res) => {
    Action.find({ league: req.params.leagueId })
        .populate('character actionType')
        .then(actions => {
            actions.length > 0
                ? res.send({ actions })
                : res.status(404).send();
        })
        .catch(e => {
            res.status(400).send({ error: e });
        });
});

leagueRoutes.get('/:leagueId/characters/stats', async (req, res) => {
    try {
        const characters = await Character.find()
                                    .populate({
                                        path: 'actions',
                                        match: { 
                                            league: req.params.leagueId,
                                        },
                                        populate: {
                                            path: 'actionType'
                                        }
                                    })

        const populatedCharacters = characters.map(character => {
            return {
                _id: character._id,
                name: character.name,
                description: character.description,
                imageURL: character.imageURL,
                actions: character.actions
            }
        })
        res.send({ characters: populatedCharacters })
    } catch (e) {
        res.status(400).send({ error: e });
    }

})

leagueRoutes.get('/:leagueId/characters/:characterId/actions', (req, res) => {
    Action.find({
        league: req.params.leagueId,
        character: req.params.characterId
    })
    .then(actions => {
        actions.length > 0
            ? res.send({ actions })
            : res.status(404).send();
    })
    .catch(e => {
        res.status(400).send({ error: e });
    })
})

leagueRoutes.get('/:leagueId/users', (req, res) => {
    User.find({ league: req.params.leagueId })
        .then(users => {
            users
                ? res.send({ users })
                : res.status(404).send();
        })
        .catch(e => {
            res.status(400).send({ error: e });
        });
});

leagueRoutes.get('/:leagueId/users/:userId', (req, res) => {
    User.findById(req.params.userId)
        .then(user => {
            user
                ? res.send({ user })
                : res.status(404).send();
        })
        .catch(e => {
            res.status(400).send({ error: e });
        });
});

leagueRoutes.get('/:leagueId/users/:userId/characters', (req, res) => {
    CharacterOwner.find({
        owner: req.params.userId,
        league: req.params.leagueId
    })
    .then(characterOwners => {
        res.send({ 
            user: characterOwners[0].owner,
            characters: characterOwners.map(item => item.character) 
        })
    })
    .catch(e => {
        res.status(400).send({ error: e });
    })
 });

 leagueRoutes.get('/:leagueId/users/:userId/actions', (req, res) => {
    Action.find({
            league: req.params.leagueId,
            user: req.params.userId
        })
        .then(actions => {
            actions.length > 0
                ? res.send({ actions })
                : res.status(404).send();
        })
        .catch(e => {
            res.status(400).send({ error: e });
        })
});

 module.exports = leagueRoutes