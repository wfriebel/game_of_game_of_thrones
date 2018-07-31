const mongoose = require('mongoose');

const database = process.env.MONGODB_URI;
mongoose.connect(database, { useNewUrlParser: true })
    .then(() => {
        console.log(`Connected to ${database}`);
    })
    .catch(e => {
        console.log(`Could not connect to database ${database}`);
    })

module.exports = mongoose