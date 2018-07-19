const faker = require('faker');
const _ = require('lodash');

const config = require('../config');
const actionCategories = require('../models/actionCategories');
const {
    createLeague,
    createUsers,
    createCharacters,
    createCharacterOwners,
    createActionTypes,
    createActions
} = require('./generateFixedData');
const {
    clearDatabase,
    populateLeague,
    populateUsers,
    populateCharacters,
    populateCharacterOwners,
    populateActionTypes,
    populateActions
} = require('./populateData');


// Generate data
const weeks = [1, 2];
const numUsers = 6;
const numCharacters = 20;

const league = createLeague();
const users = createUsers(numUsers, league);
const characters = createCharacters(numCharacters);
const characterOwners = createCharacterOwners(characters, users, league);
const actionTypes = createActionTypes(characters, actionCategories);
const actions = createActions({ characters, characterOwners, actionTypes, league, weeks });


const populateDatabase = async (done) => {
    try {
        await clearDatabase();
        await populateLeague(league);
        await populateUsers(users);
        await populateCharacters(characters);
        await populateCharacterOwners(characterOwners);
        await populateActionTypes(actionTypes);
        await populateActions(actions);
        done();
    } catch(e) {
        return Promise.reject(e);
    }
}

module.exports = {
    populateDatabase,
    league,
    users,
    characters,
    characterOwners,
    actionTypes,
    actions
};
