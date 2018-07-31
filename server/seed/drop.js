const mongoose = require('mongoose');
require('../config')

const database = process.env.MONGODB_URI
mongoose.connect(database, { useNewUrlParser: true })
    .then(() => {
        return mongoose.connection.db.dropDatabase()
    })
    .then(() => {
        console.log(`${database} was dropped`)
        mongoose.disconnect()
    })
    .catch(e => {
        console.log(`An error occured when trying to drop ${database}:`, e)
        mongoose.disconnect()
    })
