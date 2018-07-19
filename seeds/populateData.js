const { User } = require('../models/User');
const { League } = require('../models/League');
const { Character } = require('../models/Character');
const { ActionType } = require('../models/ActionType');
const { Action } = require('../models/Action');
const { CharacterOwner } = require('../models/CharacterOwner');

const clearDatabase = async () => {
    return Promise.all([
        User.remove(),
        League.remove(),
        Character.remove(),
        ActionType.remove(),
        Action.remove()
    ]);
}

const populateLeague = async (league) => {
    try {
        return await new League(league).save();
    } catch(e) {
        return Promise.reject(e);
    }
}

const populateUsers = async (users) => {
    try {
        return users.forEach(async user => await new User(user).save());
            
    } catch(e) {
        return Promise.reject(e);
    }
   
}

const populateCharacters = async (characters) => {
    try {
        return characters.forEach(async character => await new Character(character).save());
    } catch(e) {
        return Promise.reject(e);
    }
}

const populateCharacterOwners = async (characterOwners) => {
    try {
        return characterOwners.forEach(async characterOwner => await new CharacterOwner(characterOwner).save());
    } catch(e) {
        return Promise.reject(e);
    }
}

const populateActionTypes = (actionTypes) => {
    try {
        return actionTypes.forEach(async actionType => await new ActionType(actionType).save());
    } catch(e) {
        return Promise.reject(e);
    }
}

const populateActions = (actions) => {
    try {
        return actions.forEach(async action => await new Action(action).save());
    } catch(e) {
        return Promise.reject(e);
    }
}

module.exports = {
    clearDatabase,
    populateLeague,
    populateUsers,
    populateCharacters,
    populateCharacterOwners,
    populateActionTypes,
    populateActions
}