const path = require('path');

const env = process.env.NODE_ENV || 'development';

// Setup environment variables
if (env === 'development') {
    require('dotenv').config({ path: path.join(__dirname, '../.env.development')});
}

// Connect to database
require('../database');