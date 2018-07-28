const path = require('path');
// const startDatabase = require('../database');

const env = process.env.NODE_ENV || 'development';

if (env === 'development') {
    require('dotenv').config({ path: path.join(__dirname, '../.env.development')});
}
 if (env == 'test') {
    require('dotenv').config({ path: path.join(__dirname, '../.env.test')});
 }
