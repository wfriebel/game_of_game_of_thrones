const mongoose = require('mongoose');
const config = require('../config');
const { User } = require('../models/User');
const { League } = require('../models/League');
const { Character } = require('../models/Character');
const { ActionType } = require('../models/ActionType');
const { Action } = require('../models/Action');
const { CharacterOwner } = require('../models/CharacterOwner');

let serverName;

switch(process.env.NODE_ENV) {
    case 'development':
        serverName = 'development';
        // TODO Add case for test server
    default:
        serverName = 'development';
}

// Connect to database and set up environment variables
config()
    .then(async () => {
        console.log(`Deleting all data from ${serverName} database...`)
        await User.remove();
        await League.remove();
        await Character.remove();
        await ActionType.remove();
        await Action.remove();
        return Promise.resolve();
    })
    .then(() => {
        console.log('Database clear');
        mongoose.connection.close();
    })
    .catch(e => {
        console.log('An error occured while attepting to seed the database:', e);
    })