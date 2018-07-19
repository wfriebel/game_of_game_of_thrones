const faker = require('faker');
const _ = require('lodash');
const ObjectId = require('mongoose').Types.ObjectId;

const createLeague = () => {
    const league = {
        _id: ObjectId()
    };
    return league;
}

const createUsers = (numUsers, league) => {
    let users = [];
    for(let i = 0; i < numUsers; i++) {
        users.push({
            _id: ObjectId(),
            first: faker.name.firstName(),
            last: faker.name.lastName(),
            email: faker.internet.email().replace(/\_/g, '.'),
            imageURL: faker.image.people(),
            league: league._id
        })
    }
    return users;
}

const createCharacters = (numCharacters) => {
    let characters = [];
    for(let i = 0; i < numCharacters; i++) {
        characters.push({
            _id: ObjectId(),
            name: faker.name.findName(),
            description: faker.lorem.paragraph(),
            imageURL: faker.image.people()
        })
    }
    return characters;
}

const createCharacterOwners = (characters, users, league) => {
    let characterOwners = [];
    for(let i = 0; i < characters.length; i++) {
        characterOwners.push({
            _id: ObjectId(),
            character: characters[i]._id,
            owner: users[i % users.length]._id,
            league: league._id
        })
    }
    return characterOwners;
}

const createActionTypes = (characters, actionCategories) => {
    let actionTypes = [];
    for(let i = 0; i < characters.length; i++) {
        actionTypes.push({
            _id: ObjectId(),
            description: faker.company.bs(),
            category: _.sample(actionCategories)
        })
    }
    return actionTypes;
}


const createActions = ({ characters, characterOwners, actionTypes, league, weeks }) => {
    let actions = [];
    for(let i = 0; i < characters.length; i++) {
        const characterOwner = _.sample(characterOwners);
        const characterId = characterOwner.character;
        const userId = characterOwner.owner;
        actions.push({
            _id: ObjectId(),
            character: characterId,
            user: userId,
            actionType: _.sample(actionTypes)._id,
            league: league._id,
            week: _.sample(weeks)
        })
    }
    return actions;
}

module.exports = {
    createLeague,
    createUsers,
    createCharacters,
    createCharacterOwners,
    createActionTypes,
    createActions
}