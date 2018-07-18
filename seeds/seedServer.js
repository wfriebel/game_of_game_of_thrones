const mongoose = require('mongoose');
const config = require('../config');

let seed, serverName;

switch(process.env.NODE_ENV) {
    case 'development':
        seed = require('../seeds/devSeed');
        serverName = 'development';
        // TODO Add case for test server
    default:
        seed = require('../seeds/devSeed');
        serverName = 'development';
}

// Connect to database and set up environment variables
config()
    .then(() => {
        console.log(`Seeding data into ${serverName} server...`)
        return seed(); // Seed data
    })
    .then(() => {
        console.log('Seeding complete');
        mongoose.connection.close();
    })
    .catch(e => {
        console.log('An error occured while attepting to seed the database:', e);
    })