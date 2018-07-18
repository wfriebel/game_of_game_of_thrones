const path = require('path');
const startDatabase = require('../database');

const env = process.env.NODE_ENV || 'development';

module.exports = () => {
    // Setup environment variables
    if (env === 'development') {
        require('dotenv').config({ path: path.join(__dirname, '../.env.development')});
    }

    // Connect to database
    return startDatabase();
}
